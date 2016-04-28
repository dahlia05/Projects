/*jslint node: true, white: true, vars: true*/
/*global angular, $*/
"use strict";

angular.module("app", ['ngRoute', 'ngResource','ngMaterial','ngTagsInput'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/app.html',
				controller: 'AppController'
			})
			.otherwise('/');
    }])
	.controller('AppController', ['$scope','$http', function ($scope,$http) {

		var tabs = [
		            { title: 'About', content: "Tabs will become paginated if there isn't enough room for them."},
		            { title: 'Education', content: "You can swipe left and right on a mobile device to change tabs."},
		            { title: 'JobExperience', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
		            { title: 'Certification', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
		            { title: 'Projects', content: "If you remove a tab, it will try to select a new one."},	 
		            { title: 'Skills', content: "If you remove a tab, it will try to select a new one."},	          
		            { title: 'Language', content: "If you remove a tab, it will try to select a new one."},	          
		            { title: 'Awards', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
		            { title: 'Volunteer', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
		            { title: 'Interest', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
		          ],
		          selected = null,
		          previous = null;
		      $scope.tabs = tabs;
		      $scope.selectedIndex = 2;
		      $scope.$watch('selectedIndex', function(current, old){
		        previous = selected;
		        selected = tabs[current];
		        if ( old + 1 && (old != current)) console.log('Goodbye ' + previous.title + '!');
		        if ( current + 1 )                console.log('Hello ' + selected.title + '!');
		      });
		      
		     $http.get('data/resume.json').success(function(data){
		    	 $scope.resume =data;
		    	 //console.log("RESS>>"+JSON.stringify($scope.resume))
		    	 //loadresume();
		     }) 
		 
		    // $scope.loadresume

    }])
    .directive('experiencecard', [ '$rootScope', function ($rootScope) {
	return {
		restrict : 'EA',
		transclude : true,
		templateUrl :  "templates/experiencecard.html",
		scope : {
			"number" : "@",
			"eventHandler" : "&ngClick",
			"work" : "="

		},

		link : function (scope, element, attrs) {
	
		}

	};
} ])
.directive('educationcard', [ '$rootScope', function ($rootScope) {
	return {
		restrict : 'EA',
		transclude : true,
		templateUrl :  "templates/education.html",
		scope : {
			"number" : "@",
			"eventHandler" : "&ngClick",
			"education" : "="

		},

		link : function (scope, element, attrs) {
	
		}

	};
} ])
.directive('skillcard', [ '$rootScope', function ($rootScope) {
	return {
		restrict : 'EA',
		transclude : true,
		templateUrl :  "templates/skill.html",
		scope : {
			"number" : "@",
			"eventHandler" : "&ngClick",
			"skill" : "="

		},

		link : function (scope, element, attrs) {
	
		}

	};
} ]).directive('languagecard', [ '$rootScope', function ($rootScope) {
	return {
		restrict : 'EA',
		transclude : true,
		templateUrl :  "templates/language.html",
		scope : {
			"number" : "@",
			"eventHandler" : "&ngClick",
			"language" : "="

		},

		link : function (scope, element, attrs) {
	
		}

	};
} ]);