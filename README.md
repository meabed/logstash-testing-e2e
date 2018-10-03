
## Logstash Playground UI

#### Why Logstash?

#### Why UI?
Testing Logstash real configuration input, output, codecs and filters is a extremely tedious process results in logstash configurations that are not tested properly and it break very often.
 



```bash
# Clone the github repo  
$ docker pull meio/go-swap-server:latest
# run docker-compose
$ docker-compose up
# Wait fot logstash to start
# Open your web page "localhost" or docker-machine IP 
```


## Features
- Convert with Single exchange source `/GET` 
- Convert with Multi exchange sources with fallback mechanism `/POST`
    - Google
    - Yahoo
    - CurrencyLayer
    - Fixer.io
    - themoneyconverter.com
    - openexchangerates.org
    - 1forge.com
- Rate Caching - `120s Default` 
    - Memory - `Default`
    - Redis
- Rate decimal points rounding `4 Default`
- Swagger UI
- Clear API Request and Response
- Docker image, Binary release and Heroku Demo
- Clear documentation and 90%+ code coverage
- Unit tested on live and mock data


## TODO LIST
- [ ] error structure for empty json or regex not matched
- [ ] convert panic to api json error
- [ ] increase tests
- [ ] verbose logging
- [ ] godoc 
- [ ] static bundle public folder `./cmd/server/public`
- [ ] v 1.0.0 release ( docker / binary github / homebrew mac )
- [ ] support historical rates if possible
- [ ] benchmark & performance optimization ` memory leak`
- [ ] contributors list 

## Contributing

Anyone is welcome to [contribute](CONTRIBUTING.md), however, if you decide to get involved, please take a moment to review the guidelines:

* [Only one feature or change per pull request](CONTRIBUTING.md#only-one-feature-or-change-per-pull-request)
* [Write meaningful commit messages](CONTRIBUTING.md#write-meaningful-commit-messages)
* [Follow the existing coding standards](CONTRIBUTING.md#follow-the-existing-coding-standards)

## License

The code is available under the [MIT license](LICENSE.md).
