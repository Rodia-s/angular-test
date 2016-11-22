'use strict';


angular.module('myApp.view1', ['ngRoute','myApp.AuthService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','AuthService','$state',function($scope,AuthService,$state) {
  var vm = $scope;

  vm.login = function () {
      //auth.login(vm.user)
      var userPassword = $scope.data;
      AuthService.authUser(userPassword.username, userPassword.password)
          .then(connected =>$state.go('view2'))
          .catch(err=> $scope.marked=err)
  };

    
  }
])



