 var app = angular.module("app", ['ui.router']);


app.config(function($stateProvider) {

	var testState = {
		name: 'test',
		url:'/test.html',
		template:'<h2>hello world</h2>',


	}
	$stateProvider.state(testState);

	/*.state('test', {
		url
		views: {
			'test': {
			templateUrl:'/test.html',
			controller: 'newCtrl'
			}
		}
	});*/
});