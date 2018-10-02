var app = angular.module('logstash_tdd', ['ngStorage', 'hljs']);

app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});

app.filter('prettyJSON', function () {
  return function (json) {
    return angular.toJson(json, true);
  }
});

app.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 2 spaces
    tabReplace: '  ',
  });
});


app.controller('mainlCtrl', function ($scope, $http, $timeout, $location, $window, socket, $localStorage, $sessionStorage) {

  // console.log($localStorage);
  // console.log($sessionStorage);
  $scope.currentTab = 1;

  $scope.logstashMessage = '';
  $scope.messageHisory = [];
  $scope.messages = [];
  $scope.storage = $localStorage;


  socket.on('message:received', function (message) {
    var jsonMsg = JSON.parse(message);
    $scope.messages.push(jsonMsg);
    // console.log(jsonMsg);
    // console.log($scope.messages);
  });

  $scope.sendToLogstash = function () {
    $http.post('send-message', $scope.logstashMessage)
      .then(function (res) {
        // console.log(res)
      })

      .catch(function (res) {
        // console.log(res)
      });
  };
});
