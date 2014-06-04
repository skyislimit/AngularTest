'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp',[]);

<!--
phonecatApp.controller('PhoneListCtrl',function($scope, $http){
    $http.get('phones/phones.json').success(function(data){
        $scope.phones = data;
    });

    $scope.orderProp = "age";
});
-->

<!-- to avoid minification - method 1-->
<!--
function PhoneListCtrl($scope, $http){
    $http.get('phones/phones.json').success(function(data){
        $scope.phones = data;
    });

    $scope.orderProp = "age";
};
PhoneListCtrl.$inject = ['$scope', '$http'];
phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);
-->

<!-- to avoid minification - method 2 -->
<!--
function PhoneListCtrl($scope, $http){
    $http.get('phones/phones.json').success(function(data){
        $scope.phones = data;
    });

    $scope.orderProp = "age";
};
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl])
-->

<!-- same as above method 2, except use anonymous function -->
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function($scope, $http){
        $http.get('phones/phones.json').success(function(data){
            // $scope.phones = data.splice(0,10);    // get the first 10 records
            $scope.phones = data;                    // get all records
        });

        $scope.orderProp = "age";
    }]);