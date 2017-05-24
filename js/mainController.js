//controller principal "mainController" appliqué au 'module':"app", comprenant 'une function'($scope.trees)
angular.module("app").controller("mainController", function($scope, treesFactory)
	{   
		$scope.trees = treesFactory.getTrees();
//qui vaut la valeur rapportés par la methode 'getTrees'de la 'Factory':'treesFactory'
		$scope.addTree = function(tree){
			treesFactory.addTree(tree);
			$scope.newTree.name ='';
			$scope.newTree.latinName ='';
			$scope.newTree.pict ='';
			console.log(tree);
		} 
		console.log($scope.trees[0].habitat[3]);
		
	});
