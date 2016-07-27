/* global APP */
APP.Controllers.controller('optionCtrl', [
    '$scope',
    '$uibModal',
    '$rootScope',
    '$location',
    'remote.api.Service',
    function($scope, $uiModal, $rootScope, $location, service) {
        $scope.options = [];
        $scope.modal = null;
        var option;
        
        function initialize() {
            option = new Option();
            option.side = 'Buy';
            option.type = 'Call';
            option.strike = 0;
            option.price = 1;
            
            $scope.options.push(option);
        }
        
        
        $scope.createLeg = function() {
            $scope.options.push(new Option());
        };
        
        $scope.drawChart = function() {
            $uiModal.open({
               templateUrl: 'partials/modal-ptl.html',
                scope: $scope
            }).result.then(function() {
                console.log("We're closed");
            }, function(error) {
                console.log("We're dismissed ");
            });
        };

        $scope.home = function() {
            $location.path("home");
        }
        
        initialize();
    }
]);