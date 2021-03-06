/**
 * Created by rano on 20/11/16.
 */
'use strict';

angular.module('myApp.view3', ['ngRoute','myApp.AuthService'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])


    .controller('View3Ctrl', ['$scope','AuthService',function ($scope,AuthService) {
        $scope.userData = AuthService.getData();
    }]);