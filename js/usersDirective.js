angular.module("app").directive("user", function(){

	return{
		restrict:'E', // pour que ma fonction retourne un element html
		templateUrl:'templates/user.html',
		replace:true,
		scope:{
			myuser:'=myuser'
		}
	}

});console.log('hello');