/* global APP */
APP.Controllers.controller('bearCtlr', [
	'$scope',
	'$location',
	'remote.api.Service',
	function($scope, $location, service) {
		$scope.bears = [];

		$scope.listBears = function() {
            service.getBears().then(function(data) {
                $scope.bears = data;
            });
        }

        $scope.showCharts = function() {
        	$location.path("charts");
        }
	}
]);