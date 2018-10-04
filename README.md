
## Logstash playground and e2e UI

[![GitHub](https://img.shields.io/github/license/meabed/logstash-testing-e2e.svg?style=flat-square)](LICENSE.md)
[![Twitter URL](https://img.shields.io/twitter/url/meabed/logstash-testing-e2e.svg?style=flat-square)](https://twitter.com/share?url=https://meabed.com/blog/mastering-logstash-with-e2e-testing&text=Mastering%20Logstash%20with%20e2e%20testing%20@elastic%20@logstash)
[![Blog URL](https://img.shields.io/badge/blog-post-green.svg?style=flat-square)](https://meabed.com/blog/mastering-logstash-with-e2e-testing)

#### Why UI?
Testing Logstash real configuration input, output, codecs and filters is a extremely tedious process results in logstash configurations that are not tested properly and it break very often.

#### GO + Socket.IO + NG + Logstash FTW!
<a href="#" target="_blank">
    <img src="https://image.ibb.co/imnRte/logstash_e2e.jpg" alt="Logstash_Testing" border="0">
</a>


#### Architecture
##### Logstash architecture in production
<a href="#" target="_blank">
    <img src="https://image.ibb.co/f7DyMz/Screen_Shot_2018_10_03_at_4_10_27_PM.png" alt="Logstash_Testing" border="0">
</a>

##### Logstash architecture in this example
<a href="#" target="_blank">
    <img src="https://image.ibb.co/nPs3oe/Screen_Shot_2018_10_03_at_4_09_07_PM.png" alt="Logstash_Testing" border="0">
</a>


### Getting started
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

### Screens
<a href="#" target="_blank">
    <img src="https://image.ibb.co/k3bt4K/output_rz6_Ml_U.gif" alt="Logstash_Testing" border="0">
</a>

#### Docker-compose
 
<a href="#" target="_blank">
    <img src="https://preview.ibb.co/cqsSWz/Screen_Shot_2018_10_03_at_3_14_06_PM.png" alt="Logstash_Testing" border="0">
</a>

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
