angular.module("spm")
.directive('goalitem', ['$rootScope', 'CONFIG',  'GoalService', 'GoalCardService','ModalService',function ($rootScope, CONFIG, GoalService,GoalCardService,ModalService) {
return {
			restrict: 'EA',
		    transclude: true,
		    templateUrl: "components/directives/goalcard/goal.html",
			scope : {
				 	"number": "@",
		            "eventHandler": "&ngClick",
		            "isdash": "@",
		            "isactionmenushow":"@",
		            "isownersectionshown": "@",
		            "isalignmentsectionshown": "@",
                    "alignaction": "&",
//		            "isadoptionsectionshown": "@",
//		            "isfollowersectionshown": "@",
		            "isadoptbuttonshow":"@",
		            "isfeedbackbuttonshow": "@",
		            "isstatusshow": "@",
		            "isgoaldescription": "@",
                    "goal": "="
			},
			  link: function(scope, element, attrs) {
             scope.getColor =function(){
                  if(scope.isstatusshow === 'false'){ console.log("red");
                      return "{'background-color': 'red','color':'green'}";}
             };
                  
              
                GoalCardService.getAdoptions({id:scope.goal.id})
                .$promise.then(
                        function(response) {
                            scope.adoptions= response; 
                            $rootScope.adoptions=scope.adoptions;

                    }
                    );
        
                  scope.alignments =[];
                  scope.executeAlign = function() {
                    scope.alignaction();  
                  };
                          
                  scope.CONFIG = CONFIG;
		        }

		};
	}])
.service('GoalService', ['$http','$rootScope','$resource', function ($http,$rootScope,$resource) {
	 

 this.getAlignmentsByGoalId = function($http) {
	 //ToDo : get the url for rest ws in order to get all alignments for an individual goal.
	this.urlBase ="";
	$http.get(this.urlBase)
    .then(function(results){
      $scope.goalSize =results.data.length;
       return results.data; 
      
    }, function(error){
         $scope.error = error;
        console.log("Error in getAlignmentsByGoalId " + error.data + ":" + error.status);
    });
	 
 };

 this.getAllMyGoals=function($http,$scope){
       this.urlBase = "/swf.spm.service/spm/goals/mine"; 
    $http.get(this.urlBase)
    .then(function(results){
      $scope.goalSize =results.data.length;
       $scope.mygoals= results.data; 
    console.log("fn:getmygoals: "+ results.data.length +":"+$scope.mygoals.length);
    }, function(error){
         $scope.error = error;
        console.log("Error in getAllmygoals " + error.data + ":" + error.status);
    });
    };
    
   
    this.getGoalsforNextPage = function($http,$scope) {
        if($scope.isbusy === true) 
             return; // request in progress, return
        $scope.isbusy = true;
       if($scope.pagingIndex === 0){
           $scope.pagingIndex =1;
           }
        this.urlBase = "/swf.spm.service/spm/goals?filterBy="+$scope.filterBy+"&sortBy="+$scope.orderby+"&ps="+$scope.pageSize+"&pi="+$scope.pagingIndex+"&searchTerm="+$scope.searchGoalText;
  	   $http.get(this.urlBase)
       .then(function(results){	
          
           if(results.data.length !== 0)
           {
                $scope.pagingIndex++;
                $scope.goals= $scope.goals.concat(results.data);
             }
          $scope.goalSize =$scope.goals.length;
         
          console.log("infinite_scroll: "+ $scope.pageSize+":"+$scope.pagingIndex+":"+results.data.length +":"+$scope.goals.length);
            
          $scope.isbusy = false; 
       }, function(results){
           //error
           $scope.goalSize =error.data.length;
           console.log("Error in fn:nextPage " + error.data + ":" + error.status);
       });
   };

		}]);




