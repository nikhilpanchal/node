/* global APP */
APP.Services.factory('remote.api.Service', function($http) {

	var url = "/api/bears/"

	return {
		getBears: function() {
			return $http.get(url).then(function(response) {
				return response.data;
			}, function(err) {
				console.error("Failed to get bears " + err);
			});
		}
	}
})
