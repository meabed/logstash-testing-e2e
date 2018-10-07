window.logExamples = [
  {
    type: 'Apache Access Log',
    text: '104.194.203.69 - - [01/Apr/2017:16:21:15 +0000] "GET /favicon.ico HTTP/1.1" 200 3638 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"',
    note: '',
    filter_file: 'apache_access_1'
  },
  {
    type: 'Nginx Log',
    text: '104.194.203.69 - - [10/Nov/2017:15:17:20 +0000] "GET /favicon.ico HTTP/1.1" 200 199 "http://192.168.1.19/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"',
    note: '',
    filter_file: 'nginx_access_1'
  },
  {
    type: 'Nginx Log',
    text: '66.249.65.159 - - [06/Nov/2014:19:10:38 +0600] "GET /news/53f8d72920ba2744fe873ebc.html HTTP/1.1" 404 177 "-" "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"',
    note: '',
    filter_file: 'nginx_access_1'
  },
  {
    type: 'heroku route',
    text: '2018-10-01T11:02:34.305524+00:00 heroku[router]: at=info method=GET path= "/convert?from= EUR&to= GBP&amount= 100&exchanger=yahoo" host=go-swap-server.herokuapp.com request_id=7cbfb25f-c86e-4201-ba21-7aa86085a6db fwd="63.143.42.249" dyno=web.1 connect=0ms service=96ms status=200 bytes=368 protocol=https'
  },
  {
    type: 'AWS ELB HTTP',
    text: '2015-05-13T23:39:43.945958Z my-loadbalancer 192.168.131.39:2817 10.0.0.1:80 0.000073 0.001048 0.000057 200 200 0 29 "GET http://www.example.com:80/ HTTP/1.1" "curl/7.38.0" - -',
    note: 'from: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html'
  },
  {
    type: 'AWS ELB HTTPS',
    text: '2015-05-13T23:39:43.945958Z my-loadbalancer 192.168.131.39:2817 10.0.0.1:80 0.000086 0.001048 0.001337 200 200 0 57 "GET https://www.example.com:443/ HTTP/1.1" "curl/7.38.0" DHE-RSA-AES128-SHA TLSv1.2',
    note: 'from: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html'
  },
  {
    type: 'AWS ELB TCP',
    text: '2015-05-13T23:39:43.945958Z my-loadbalancer 192.168.131.39:2817 10.0.0.1:80 0.001069 0.000028 0.000041 - - 82 305 "- - - " "-" - -',
    note: 'from: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html'
  },
  {
    type: 'AWS ELB SSL',
    text: '2015-05-13T23:39:43.945958Z my-loadbalancer 192.168.131.39:2817 10.0.0.1:80 0.001065 0.000015 0.000023 - - 57 502 "- - - " "-" ECDHE-ECDSA-AES128-GCM-SHA256 TLSv1.2',
    note: 'from: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html'
  },
];


