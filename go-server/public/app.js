var app = angular.module('logstash_e2e', ['ngStorage', 'hljs']);

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

app.filter('dateUI', function ($filter) {
  return function (date) {
    return $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
  }
});

app.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 2 spaces
    tabReplace: '  ',
  });
});


app.controller('mainlCtrl', function ($scope, $http, $timeout, $location, $window, socket, $localStorage, $sessionStorage) {

  $scope.logExamples = $window.logExamples;
  $scope.logFilters = [];
  $scope.showUseful = 0;
  $scope.currentTab = 1;

  $scope.messagesFromLS = [];
  var storage = $scope.storage = $localStorage;

  storage.messageHistory = storage.messageHistory || [];
  var messageHistoryLen = storage.messageHistory.length;

  $scope.logstashMessage = '';

  if (storage.messageHistory[messageHistoryLen - 1]) {
    $scope.logstashMessage = storage.messageHistory[messageHistoryLen - 1].msg || '';
  }

  socket.on('message:received', function (message) {
    var jsonMsg = JSON.parse(message);

    $scope.messagesFromLS.push({msg: jsonMsg, inc: $scope.messagesFromLS.length + 1, date: new Date()});
    // console.log(jsonMsg);
    // console.log($scope.messages);
  });

  $scope.tryExample = function (idx) {
    $scope.logstashMessage = $scope.logExamples[idx].text;
    $scope.sendToLogstash($scope.logstashMessage);
  };

  $scope.toggleExampleFilter = function (idx) {
    console.log(idx)
  };

  $scope.copyExample = function (idx) {
    console.log(idx)
  };

  $scope.clearMessagesHistory = function () {
    storage.messageHistory = [];
  };

  $scope.clearMessagesFromLS = function () {
    $scope.messagesFromLS = []
  };

  $scope.toggleUsefulLinks = function () {
    $scope.showUseful = !$scope.showUseful
  };

  $scope.sendToLogstash = function (logstashMessage) {
    storage.messageHistory.push({msg: logstashMessage, date: new Date(), inc: storage.messageHistory.length + 1});

    $http.post('send-message', logstashMessage)
      .then(function (res) {
        // console.log(res)
      })

      .catch(function (res) {
        // console.log(res)
      });
  };
});
