'use strict';

angular.module('myApp.view2', ['ngRoute','myApp.LogoutService','myApp.AuthService'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    
        


    .controller('View2Ctrl', ['$scope','LogoutService','$state','AuthService',function ($scope,LogoutService,$state,AuthService) {
        $scope.logout = function () {
            LogoutService.logout();
            $state.go('view1');

        }
        $scope.userData = AuthService.getData();
        console.log($scope.userData)
        $scope.profile = function() {
            $state.go('view3');
        }
    }
    ]);
  