var myApp = angular.module("myApp", []);

myApp.controller('productController' ,function($scope)
{  $scope.name = "Banking products"; 
   $scope.description = {
 desc : "There are various banking products and services given to customers in a bank.These are categorizeed as below:-",
 types : [ "Personal Loans","Corporate Loans","Credit Cards" ,"Fixed Deposite", "Recurring Deposits" ,"Call Deposit", "Money Market Accounts", "Lease Services" ,"Financing and Others"]
                        };

});

myApp.directive('popOverChooser', function ($compile) {
var template = '<div>' +
               '<span>{{description.desc}}</span></br>' + 
                '<ul>' + 
                '<li ng-repeat ="type in description.types"><h5>{{type}}</h5>' +
                '</li>' +
                '</ul>' +
                '<button id="clsbtn">Close</button>' +
                '</div>';

    return {
        restrict: 'A',
        transclude: true,
        template: '<span ng-transclude></span>',
        link: function (scope, element, attrs) {
            var chooserContent = $compile(template)(scope);
            var options = {
                content: chooserContent,
                placement: 'right',
                html: true,
                title: 'Choose items'               
            };

            $(element).popover(options).hover(function (e) {
                $(this).popover('show');               
                $('#clsbtn').click(function (e) {
                    $('#item-chooser').popover('hide');
                });
                e.preventDefault();
            });
        }
    }});
