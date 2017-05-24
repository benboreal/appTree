angular.module("app").directive("tree", function(){

	return{
		restrict:'E', // pour que ma fonction retourne un element html
		templateUrl:'templates/tree.html',
		replace:true,
		scope:{
			mytree:'=mytree'
		}
	}

});console.log('toto');