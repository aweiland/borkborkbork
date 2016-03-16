angular.module('bork', [])
	.config(function($httpProvider, $sceDelegateProvider) {
    	//Enable cross domain calls
    	$httpProvider.defaults.withCredentials = true;
    	$httpProvider.defaults.useXDomain = true;
    	// $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://eu0v1mo08k.execute-api.us-east-1.amazonaws.com/*']);
})
.controller('FlooDerFloofen', FlooDerFloofen);

function FlooDerFloofen($http, $sce) {
	var vm = this;
	vm.cheffed = null;

	vm.borkIt = function() {
		var data = {"text": vm.borkText};
		var config = {
				withCredentials: false,
                headers : {
                    'Content-Type': 'application/json'
                }
            };
		$http.post("https://eu0v1mo08k.execute-api.us-east-1.amazonaws.com/chef", data, config)
			.then(function(data) {
				vm.cheffed = $sce.trustAsHtml(data.data.replace('\n', '<br />'));
				console.log(data);
			}, function(oops) {
				console.log(oops);
			});
	}

}