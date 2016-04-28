angular.module("app")
.directive('experincecard', [ '$rootScope', function ($rootScope) {
	return {
		restrict : 'EA',
		transclude : true,
		templateUrl :  "../components/experincecard/experincecard.html",
		scope : {
			"number" : "@",
			"eventHandler" : "&ngClick",
			"work" : "="

		},

		link : function (scope, element, attrs) {
	
		}

	};
} ]);
