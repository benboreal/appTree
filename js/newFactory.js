angular.module("app").factory('newFactory', function($http) {
    return{
        getdata: function(){
            return $http.get('http://localhost/appTree/userList.php');
        }
    }

});
console.log("hello");