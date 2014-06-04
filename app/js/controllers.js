'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers',[]);


<!-- same as above method 2, except use anonymous function -->
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function($scope, $http){
        $http.get('phones/phones.json').success(function(data){
            // $scope.phones = data.splice(0,10);    // get the first 10 records
            $scope.phones = data;                    // get all records
        });

        $scope.orderProp = "age";
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope','$routeParams','$http',
    function($scope,$routeParams,$http){
        $http.get('phones/'+ $routeParams.phoneId + '.json').success(function(data){
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });
        //$scope.phoneId = $routeParams.phoneId;

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

        $scope.hello = function(name){
            alert('Hello ' + (name || 'world') + '!');
        }
    }]);