/**
 * Created by rano on 21/11/16.
 */
angular.module('myApp.LogoutService', []
).factory("LogoutService", ['$window',function ($window) {

    function logout() {
        return {state:$window.localStorage.removeItem("connected"), name:$window.localStorage.removeItem("userName")};
    }
    return {logout:logout};
}
]);
