package main

import (
    "bytes"
    "flag"
    "fmt"
    "github.com/googollee/go-socket.io"
    "io/ioutil"
    "log"
    "net/http"
    "path/filepath"
    "runtime"
    "time"
)

var (
    logstashHost *string
    host         *string
    port         *int
    Socket       socketio.Socket
    IsSocketOn   = false
    // Logger ... Logger Driver
    routes = map[string]func(w http.ResponseWriter, r *http.Request){
        `/send-message`:    SendMessageToLogstash,
        `/receive-message`: ReceiveMessageFromLogstash,
    }
    _, filename, _, _ = runtime.Caller(0)
    defaultStaticPath = filepath.Dir(filename) + `/public`
    staticPath        = &defaultStaticPath
)

// init ... init function of the server
func init() {
    host = flag.String(`H`, `0.0.0.0`, `Host binding address`)
    logstashHost = flag.String(`LH`, `0.0.0.0`, `Logstash Host`)
    port = flag.Int(`P`, 9001, `Host binding port`)
    staticPath = flag.String(`STATIC_PATH`, defaultStaticPath, `Webserver static path`)

    flag.Parse()
}

// main ... main function start the server
func main() {

    log.Printf("host %s", *host)
    log.Printf("logstashHost %s", *logstashHost)
    log.Printf("port %d", *port)
    log.Printf("Static dir %s", *staticPath)

    // handle routers
    for k, v := range routes {
        http.HandleFunc(k, v)
    }

    go serveHTTP(*host, *port)
    select {}
}

// SendMessageToLogstash ... SendMessage to Logstash Server
func SendMessageToLogstash(w http.ResponseWriter, r *http.Request) {
    url := fmt.Sprintf("http://%s:8888", *logstashHost)

    jsonStr, _ := ioutil.ReadAll(r.Body);
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
    // todo simulate if json or different codecs like filebeat / gelf / etc...
    //req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)

    if err != nil {
        w.WriteHeader(500)
        w.Write([]byte(err.Error()))
    } else {
        defer resp.Body.Close()
        body, _ := ioutil.ReadAll(resp.Body)
        w.Write(body)
    }
}

// ReceiveMessageFromLogstash ... Receive Message from logstash and emit it to socket io server
func ReceiveMessageFromLogstash(w http.ResponseWriter, r *http.Request) {
    body, _ := ioutil.ReadAll(r.Body)

    if IsSocketOn == true {
        _ = Socket.Emit("message:received", string(body[:]))
    }
}

// serveSocketIO ... SocketID Server
func serveSocketIO() (*socketio.Server, error) {
    SocketServer, err := socketio.NewServer(nil)
    if err != nil {
        log.Fatal(err)
    }

    SocketServer.On("connection", func(so socketio.Socket) {
        Socket = so
        log.Println("on connection")
        IsSocketOn = true
        so.Join("main")

        so.On("disconnection", func() {
            IsSocketOn = false
            log.Println("on disconnect")
        })
    })

    SocketServer.On("error", func(so socketio.Socket, err error) {
        log.Println("error:", err)
    })

    return SocketServer, nil
}

// serveHTTP ... initiate the HTTP and Socket Server
func serveHTTP(host string, port int) {

    mux := http.NewServeMux()
    for k, v := range routes {
        mux.HandleFunc(k, v)
    }
    mux.Handle(`/`, http.FileServer(http.Dir(*staticPath)))

    socketIoServer, _ := serveSocketIO()
    mux.Handle("/socket.io/", socketIoServer)

    addr := fmt.Sprintf("%v:%d", host, port)
    server := &http.Server{
        Addr:           addr,
        Handler:        mux,
        ReadTimeout:    10 * time.Second,
        WriteTimeout:   10 * time.Second,
        MaxHeaderBytes: 1 << 20,
    }

    log.Printf("Server Started @ %v:%d", host, port)

    err := server.ListenAndServe()
    log.Panic(err.Error())
}
