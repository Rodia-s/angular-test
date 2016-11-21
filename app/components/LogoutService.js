/**
 * Created by rano on 21/11/16.
 */
angular.module('myApp.LogoutService', []
).factory("LogoutService", ['$window',function ($window) {

    function logout() {
        return $window.localStorage.removeItem("connected");
    }
    return {logout:logout};
}
]);
