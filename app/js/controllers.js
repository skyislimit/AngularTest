'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers',[]);


<!-- same as above method 2, except use anonymous function -->
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function($scope, Phone){
        $scope.phones = Phone.query();
        $scope.orderProp = "age";
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope','$routeParams','Phone',
    function($scope,$routeParams,Phone){
        $scope.phone = Phone.get({
            phoneId:$routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

        $scope.hello = function(name){
            alert('Hello ' + (name || 'world') + '!');
        }
    }]);