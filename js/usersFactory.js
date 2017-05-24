
angular.module("app").factory("usersFactory", function() {//création de la 'Factory':'treesFactory' appelé sur le module'app'
		
		var users = [
		//création de la variables 'users'contenant un tableau d'objets(les données sont privées et lilmitées à la 'Factory')
						{
							id : 1,
							firstName : 'jimi',
							lastName: 'hendrix',
							age: '27',
							userPict : 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Soundtrack_recordings-200x200.jpg/220px-Soundtrack_recordings-200x200.jpg'
							
						}, 						
						{
							id: 2,
							firstName :'brian',
							lastName : 'jones',
							age: 27,
							userPict : 'https://s-media-cache-ak0.pinimg.com/236x/c8/5f/bd/c85fbda9d95447bb4f68e13f4da740c2.jpg'
													
						}
					];

					console.log(users);

		var getUsers = function() {		
			return users;
		};
			console.log(users);
		var addUser = function(user){
			user = prepareUser(user);
			users.push({id:user.id, firstName: user.firstName, lastName: user.lastName, age: user.age, userPict: user.userPict});
			console.log(user.userPict);
		};

		function prepareUser(user){			
			user.id = user.length + 1;
			return user;
		}



		console.log(getUsers);
	
		return {

			getUsers : getUsers,
			addUser: addUser
		}	
});