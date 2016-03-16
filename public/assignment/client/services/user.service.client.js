/**
 * Created by muaazsalagar on 2/20/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q, $rootScope) {

        var api = {
            // declaration of methods by following standads of john papas


            createUser:createUser,
            setCurrentUser:setCurrentUser,
            getCurrentUser:getCurrentUser,

            // Api
            findUserByCredentials:findUserByCredentials,
            findUserByUsername:findUserByUsername,
            findAllUsers:findAllUsers,
            updateUserByID:updateUserByID,
            findUserByID:findUserByID,
            deleteUserById:deleteUserById
        };

        return api;


        function findUserByCredentials(username, password)
        {
            var deferred=$q.defer();
            var url="/api/assignment/user?username=:username&password=:password";
            console.log("In the findUserByCredentials method")
            url=url.replace(":username",username);
            url=url.replace(":password",password);
            console.log(username);
            console.log(password);

            $http.get(url).success(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;
        }

        function createUser(user)
        {
            var deferred=$q.defer();
            var url="/api/assignment/user";
            $http.post(url,user).success(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;


        }

        function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
            return $rootScope.currentUser;
        }

        function findUserByUsername(username)
        {
            var deferred=$q.defer();
            var url="/api/assignment/user?username=username";
            url=url.replace(":username",username);
            $http.get(url).success(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;


        }

        function findAllUsers(){
            var deferred=$q.defer();
            var url="/api/assignment/user";

            $http.get(url).success(function(response){
                deferred.resolve(response);
            });


            return deferred.promise;
        }

        function updateUserByID(userId,user)
        {
            var deferred=$q.defer();
            var url="/api/assignment/user/:id";
            url=url.replace(":id",userId);
            console.log(url);
            console.log(userId);

            $http.put(url,user).success(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;
        }

        function deleteUserById(user)
        {
            var deferred=$q.defer();
            var url="/api/assignment/user/:id";
            $http.delete(url).success(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;
        }

        function findUserByID(userId)
        {
            console.log("Client Calling the finduserID to the server");
            var deferred=$q.defer();
            var url="/api/assignment/user/:id";
            url=url.replace(":id",userId);
            console.log(url);
            console.log(userId);

            $http.get(url).success(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;

        }


    }
})();