angular.module('data.controllers', [])
    
.controller('watchersCtrl', function($scope) {
	$scope.wathcers = [{
		user: 'Father',
		avatar: 'p.jpg',
		filterHook: 'dd'
		},{
		user: 'Mother',
		avatar: 'm.jpg',
		filterHook: 'mm'
		},{
		user: 'Son',
		avatar: 's.jpg',
		filterHook: 'sn'
		},{
		user: 'Dauther',
		avatar: 'd.jpg',
		filterHook: 'dr'
  }];
})


.controller('memosCntr', function ($scope) {

	$scope.memos = [
		{
			memoDep: 'dd',
			memoDate: '01.01.15',
			memoTitle: 'Scope Variable',
			memoContent: 'You may have noticed the $scope variable we’re passing as a parameter to the controller. The $scope variable is supposed to link your controller and views. In particular, it holds all the data that will be used within your template.'
		},
		{
			memoDep: 'dd',
			memoDate: '01.01.15',
			memoTitle: 'Data Array',
			memoContent: 'Anything you add to it (like the driversList in the above example) will be directly accessible in your views. For now, let’s just work with a dummy (static) data array, which we will replace later with our API service.'
		}
   ];

});


