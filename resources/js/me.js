var app = angular.module('jna', [ 'ngRoute' ]);

	app.config(function($routeProvider) {

		$routeProvider.when('/me', {
	        templateUrl: '/myself.html',
	        controller: 'MyselfController'
	    }).when('/contact', {
	        templateUrl: '/contact.html',
	        controller: 'ContactController'
	    });
	});

	app.controller('MyselfController', function($scope) {
		console.log('Loading my personal page');

		


		$scope.question = 'Your favourite song?';

		$scope.acdc = 'Back in black';
		$scope.eminem = 'Loose yourself';

		$scope.resolveYourTypeOfMusic = function($music) {
			var type = '';
			if ($scope.mySong == 'Back in black') {
				type = "Rock";
			}
			else {
				type = "Hip hop";
			}

			$scope.usersStyle = type;
		}
	});

	app.controller('LoopController', function($scope) {
			console.log('Loop Controller');
			$scope.teachers = [
			    {firstname: 'Robert', lastname: 'Halx'},
			    {firstname: 'John', lastname: 'Roll'},
			    {firstname: 'Irene', lastname: 'Roberts'},
			 ];

			 $scope.deleteTeacher = function(name) {
			 	for (var i = $scope.teachers.length - 1; i >= 0; i--) {
			 		if ($scope.teachers[i].firstname == name) {
			 			$scope.teachers[i] = null;
			 		}
			 	};
			 };

	});

	app.controller('SVGCtrl', function($scope) {
	  var shift = 135;
	  $scope.circle = { r:130, x: shift, y: shift };

	  function update() {
	    $scope.date = new Date();       

	    var sec = $scope.date.getSeconds()  + $scope.date.getMilliseconds()/1000;
	    var min = $scope.date.getMinutes() + $scope.date.getSeconds()/60;
	    var h = $scope.date.getHours()%12 + $scope.date.getMinutes()/60;

	    $scope.sec = { x: shift + 100 * Math.cos(sec/60 * Math.PI * 2 - Math.PI/2),
	                   y: shift + 100 * Math.sin(sec/60 * Math.PI * 2 - Math.PI/2)};
	    $scope.min = { x: shift + 100 * Math.cos(min/60 * Math.PI * 2 - Math.PI/2),
	                   y: shift + 100 * Math.sin(min/60 * Math.PI * 2 - Math.PI/2)};
	    $scope.hour = { x: shift + 40 * Math.cos(h/12 * Math.PI * 2 - Math.PI/2),
	                    y: shift + 40* Math.sin(h/12 * Math.PI * 2 - Math.PI/2)};

	    window.setTimeout(function() {$scope.$apply(update)}, 100);
	  }       
	  update();
	});

	app.directive('myButton', function () {
	  return {
	    restrict: 'E',
	    template: '<input id="inputTest">',
	  }});

	app.directive('myDirective', function() {
		return {
	    restrict: 'E',
	    template: '<td>{{teacher.firstname}}</td><td>{{teacher.lastname}}</td>',
	 }});

	app.directive('myDirectiveButton', function () {
	  return {
	    restrict: 'E',
	    scope: {
	      myMessage: '@message',
	      myModel: '=model',
	      myAction: '&action',
	    },
	    template: '<input class="form-control" type="text" ng-model="myModel">\
	   <button type="button" class="btn" ng-click="myAction()">{{myMessage}}</button>',
	  }});

	app.controller('SayHelloController', function($scope) {
	  $scope.sayHello = function() {
			alert('Hello');
	  }
	});

	app.directive('myTeacher', function () {
	  return {
	    restrict: 'E',
	    scope: {
	      myMessage: '@message',
	      myModel: '=model',
	      myAction: '&action',
	    },
	    template: '<td>{{myModel.firstname}}</td><td>{{myModel.lastname}}</td>',
	  }});