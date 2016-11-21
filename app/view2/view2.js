'use strict';

angular.module('myApp.view2', ['ngRoute','myApp.LogoutService'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    
        


    .controller('View2Ctrl', ['$scope','LogoutService','$state',function ($scope,LogoutService,$state) {
        $scope.logout = function () {
            LogoutService.logout();
            $state.go('view1');

        }
    }
    ]);
  