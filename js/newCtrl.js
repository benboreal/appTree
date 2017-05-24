console.log('coucou');
angular.module("app").controller("newCtrl", function($scope, $http) {
	
	 $http.get('http://localhost/appTree/userList.php')
     .then(function successCallback(contents){
          console.log(contents);
          $scope.datas = contents;
          console.log([0].firstname);
          $scope.users = $scope.datas.data;
          console.log($scope.users);

          $scope.push = function() {
          	var newUser = angular.copy($scope.newUser);
          	$scope.users.push(newUser);
          };

          $scope.newUser = {
          firstname:'',
          lastname:'',
          picture:''

          },
          console.log($scope.newUser);

  	}, 
  	function errorCallback(contents) {
      console.log('error');     
  	})
});//fin de angular
	



 