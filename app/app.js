'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router',
  'ngRoute',
  'myApp.view1',
  'myApp.view2', 
    'myApp.view3',
  'myApp.version',
  'myApp.AuthService'
])


.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('view1');

  $stateProvider
      .state('view1', {
        url: '/view1',
        template: 'view1'
      })
      .state("view2", {
        url: "/view2",
        template: 'view2',
        data: {
          authorization: true,
          redirectTo: '/view1'
        }
      })
      .state('view3', {
        url: '/view3',
        template: 'view3/view3.html',
        data: {
          authorization: true,
          redirectTo: 'view1'
        }
      })


})
.run(['$state', 'AuthService', '$rootScope',function($state,AuthService,$rootScope){
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
        var user = AuthService.getData();
        console.log(user);
        if (user!== null && user.connected!==true ) {
            console.log(connected)
        }
        else {
            $state.go('view1');
        }
    })}]
); 