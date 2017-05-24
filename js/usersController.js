angular.module("app").controller("usersController", function($scope, usersFactory)
	{   
		$scope.users = usersFactory.getUsers();

		$scope.addUser = function(user){
			usersFactory.addUser(user);
			$scope.newUser.firstName ='';
			$scope.newUser.lastName ='';
			$scope.newUser.age ='';
			$scope.newUser.userPict = '';
			//console.log($scope.newUser.userPict);
	
		} 
		
	 
		
		//console.log($scope.newUser.userPict);
		
	});
