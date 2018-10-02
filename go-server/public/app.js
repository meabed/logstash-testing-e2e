var app = angular.module('logstash_tdd', []);
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
app.controller('mainlCtrl', function ($scope, $http, $timeout, $location, $window, socket) {


    var loadTime = 1000, //Load the data every second
        errorCount = 0, //Counter for the server errors
        loadPromise; //Pointer to the promise created by the Angular $timout service
    $scope.logstashMessage = '';
    $scope.messageHisory = [];
    $scope.messages = [];


    socket.on('init', function (data) {
        console.log('XXX');
        console.log(data)
    });

    socket.on('message:received', function (message) {
        $scope.messages.push(message);
        console.log(message);
        console.log($scope.messages);
    });

    $scope.sendToLogstash = function () {
        console.log($scope.logstashMessage);
        $http.post('send-message', $scope.logstashMessage)
            .then(function (res) {
                console.log(res)
            })

            .catch(function (res) {
                console.log(res)
            });
    };
    var parseData = function () {

    };

    var getData = function () {
        $scope.loading = 'Loading...';
        $http.get('get-log?now=' + Date.now())

            .then(function (res) {
                $scope.data = res.data.args;
                $scope.loading = '';

                parseData(res.data);

                errorCount = 0;
                nextLoad();
            })

            .catch(function (res) {
                $scope.loading = 'Server error';
                nextLoad(++errorCount * 2 * loadTime);
            });
    };

    var cancelNextLoad = function () {
        $timeout.cancel(loadPromise);
    };

    var nextLoad = function (mill) {
        mill = mill || loadTime;

        //Always make sure the last timeout is cleared before starting a new one
        cancelNextLoad();
        loadPromise = $timeout(getData, mill);
    };


    //Start polling the data from the server
    // getData();


    //Always clear the timeout when the view is destroyed, otherwise it will keep polling and leak memory
    $scope.$on('$destroy', function () {
        cancelNextLoad();
    });


});
