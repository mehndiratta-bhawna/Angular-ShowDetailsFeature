(function(){

var app = angular.module('productmodule',[]);

app.controller('productController' ,function($scope)
{  $scope.name = "Banking products"; 
   $scope.description = {
 desc : "There are various banking products categorized as:-",
 types : [ "Personal Loans","Corporate Loans","Credit Cards"]
                        };
 $scope.mousemoved = false;
 $scope.showdetails = function()
 { 
   $scope.mousemoved = true; 
 };
$scope.hidedetails = function() { $scope.mousemoved =false; };


});

})();


