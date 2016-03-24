angular.module('app',['ezDirectives'])
.controller("mainController", ["$scope","$log", function($scope, $log){
  $scope.title = "Tree";
  
  $scope.displayProperty = "Name";
  $scope.treeData = [];
  $scope.selected = {};
  $scope.selected.selectedNodes = [];
  
  var init = function(){
  // $scope.treeData = [];
  // treeData.__level = 0;
  // treeData.__isHidden = false;
  // treeData.__isExpanded = true;
  // treeData.__isSelected = true;
  // $scope.treeData.push(treeData);
  // var tree =  flattenTree(treeData); 
  // $scope.treeData = $scope.treeData.concat(tree);
   
  // $log.debug($scope.treeData);
  $scope.treeData = treeData;
  }
  

  
  var treeData = {
    "Name":"Root",
    "Id" : 1,
    "Children":[
        {
          "Name":"TA1",
          "Id" : 2,
          "Children":[
              {
                "Name":"Anatomy1",
                "Id" : 3,
                "Children":[
                  {
                      "Name":"Dc1",
                      "Id" : 4,
                      "Children":[
                        
                        ]
                    },
                    {
                      "Name":"Dc2",
                      "Id" : 5,
                      "Children":[
                        
                        ]
                    }
                  ]
              }
            ]
        },
        //----------
        {
          "Name":"TA2",
          "Id" : 6,
          "Children":[
              {
                "Name":"Anatomy2",
                "Id" : 7,
                "Children":[
                  {
                      "Name":"Dc3",
                      "Id" : 8,
                      "Children":[
                        
                        ]
                    },
                    {
                      "Name":"Dc4",
                      "Id" : 9,
                      "Children":[
                        
                        ]
                    }
                  ]
              }
            ]
        }
      ]
  }
  init();
}]);