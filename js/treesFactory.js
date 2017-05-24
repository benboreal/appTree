angular.module("app").factory("treesFactory", function() {//création de la 'Factory':'treesFactory' appelé sur le module'app'
		console.log('toto');
		var trees = [
		//création de la variables 'trees'contenant un tableau d'objets(les données sont privées et lilmitées à la 'Factory')
						{
							id : 1,
							name : 'Fir',
							latinName: 'Abies',
							pict : 'http://jardin-secrets.com/articles/4552/vignette-200-sapin-blanc.jpg',
							habitat : ['High Mountains', 'Mountains','Hills', 'Nordic Plains']
						}, 

						{
							id: 2,
							name :'Oak',
							latinName : 'Quercus',
							pict : 'http://www.la-forestiere-lansarguoise.com/images/Forestiere_Lansarguoise_chene_blanc.png',
							habitat : ['Lands','Plains', 'Hills']						
						},
						{
							id: 3,
							name :'Birch',
							latinName : 'Betula',
							pict : 'http://cdn.grid.fotosearch.com/CSP/CSP655/k6551154.jpg',
							habitat : ['Lands','Plains', 'Hills' ,'Mountains']						
						},
						{
							id: 4,
							name :'Ash',
							latinName : 'Fraxinus',
							pict : 'http://www.dwardeco.kingeshop.com/img_per/1043345/mi_ima_0a34cedb62.jpg',
							habitat : ['Lands','Plains', 'Hills' ,'Mountains']						
						}
					];
					console.log(trees);

		var getTrees = function() {		
			return trees;
		};

		var addTree = function(tree){
			tree = prepareTree(tree);
			trees.push({id:tree.id, name: tree.name, latinName: tree.latinName, pict: tree.pict});
		};

		function prepareTree(tree){
			tree.id = tree; + 1;
			return tree;
		}

		console.log(getTrees);
	
		return {

			getTrees : getTrees,
			addTree: addTree
		}

	

});