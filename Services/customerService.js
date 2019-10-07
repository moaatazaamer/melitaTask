App.service("customerService", ["$http",
	function ($http) {
		return {
			getSubscription: getSubscription,
			getOffers: getOffers,
			
		}
		function getSubscription() {
			var request = $http({
				method: "GET",
				url: "https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions"
			});
			return (request.then(
				function (response) {
					return response.data;
				}, function (error) {
					return error;
				}));
		}
		function getOffers() {
			var request = $http({
				method: "GET",
				url: "https://selfcare-service.demo.melita.com/interview/api/offers"
			});
			return (request.then(
				function (response) {
					return response.data;
				}, function (error) {
					return error;
				}));
		}		
	}]);