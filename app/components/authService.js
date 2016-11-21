/**
 * Created by rano on 20/11/16.
 */

angular.module('myApp.AuthService', []
).factory("AuthService", ['$window', '$q', function ($window, $q) {
    var userList = [];
    var err = "Wrong UserName or Password";
    userList.push({userName: "Rodia", password: "serrano", connected: "false"});
    userList.push({userName: "Xavié", password: "Gai-rein", connected: "false"});
    function authUser(name, password) {
        var deferred = $q.defer();
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].userName === name && userList[i].password === password) {
                userList[i].connected = true;
                $window.localStorage.setItem('userName', userList[i].userName);
                $window.localStorage.setItem('connected',userList[i].connected);
                deferred.resolve(userList[i].connected);
            }
            else if (userList.length === i+1) {
                deferred.reject(err);
                console.log('dans else if authuser');
            }
        }
        return deferred.promise;
    };
console.time("getData");
    function getData() {
        return {state:$window.localStorage.getItem('connected'),name:$window.localStorage.getItem('userName')};
    };
    return {getData: getData, authUser: authUser, userList: userList};

}]);
console.timeEnd("getData");