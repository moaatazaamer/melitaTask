App.controller("customerController", ["$scope", "customerService", 
	function ($scope, customerService) {

		$scope.isDisplayLogin = true;
		$scope.selectSubTab = true;
		$scope.getCustomerInfo = function () {
			if (customerService) {
				$scope.customer = customerService.dummyObj ? angular.copy(customerService.dummyObj) : {};
				$scope.isDisplayLogin = false;
				customerService.getSubscription().then(
					function (response) {
						if (response) {
							$scope.customer.subscription = response;							

							}						

					});
				customerService.getOffers().then(
					function (response) {
						if (response) {
							$scope.customer.offers = response.offers;

						}

					});

			}
		}
		$scope.showtab = function (tabName) {
			initTabs();
			switch (tabName) {
				case 'sub':
				default:
					$scope.selectSubTab = true
					break;
				case 'offer':
					$scope.selectOfferTab = true;
					break;
				case 'full':
					$scope.selectFullTab = true;
					break;

			}
		}
		function initTabs() {
			$scope.selectSubTab = false;
			$scope.selectOfferTab = false;
			$scope.selectFullTab = false;
		}
	}]);