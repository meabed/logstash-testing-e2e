
## Logstash Playground UI

#### Why Logstash?

#### Why UI?
Testing Logstash real configuration input, output, codecs and filters is a extremely tedious process results in logstash configurations that are not tested properly and it break very often.
 



```bash
# Clone the github repo  
$ git clone --depth 1  --branch master https://github.com/meabed/logstash-testing-e2e.git

# run docker-compose
$ docker-compose up

# Wait fot logstash to start
# Open your web page localhost:9001

# if you are using mac you open the docker machine ip 
$ docker-machine ip default # 192.168.64.6:9001
```


## Features
- Online UI For e2e logstash testing
- Realtime Logstash parsing of logs
- Examples of logs of different services
- and more...

## TODO LIST
- [ ] Screenshots
- [ ] Video Tutorial
- [ ] Examples " Mongo / Redis / Nginx / Apache / Log4j / JSON / Multiline / etc... "
- [ ] UI Enhancements
- [ ] UI Start / Stop / Reload logstash 
- [ ] UI Logstash error viewer from log path 
- [ ] More documentation about using logstash
- [ ] Deploy on public test server
- [ ] Online editing of logstash configurations
- [ ] Contributors list 

## Contributing

Anyone is welcome to [contribute](CONTRIBUTING.md), however, if you decide to get involved, please take a moment to review the guidelines:

* [Only one feature or change per pull request](CONTRIBUTING.md#only-one-feature-or-change-per-pull-request)
* [Write meaningful commit messages](CONTRIBUTING.md#write-meaningful-commit-messages)
* [Follow the existing coding standards](CONTRIBUTING.md#follow-the-existing-coding-standards)

## License

The code is available under the [MIT license](LICENSE.md).
