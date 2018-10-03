window.logExamples = [
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
  }
];
