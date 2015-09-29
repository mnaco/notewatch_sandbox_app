angular.module('notewatchapp.services', [])

.factory('MemoService', function($q) {

  var memos = [

  	{
  		memoId: 1,
			memoDep: 'dd',
			memoDate: 'Today',
			memoTitle: 'Scope Variable',
			memoContent: 'You may have noticed the $scope variable we’re passing as a parameter to the controller. The $scope variable is supposed to link your controller and views. In particular, it holds all the data that will be used within your template.'
		},
		{
			memoId: 2,
			memoDep: 'sn',
			memoDate: 'Today',
			memoTitle: 'Route this',
			memoContent: 'Something interesting.'
		},
		{
			memoId: 3,
			memoDep: 'dd',
			memoDate: '01.01.15',
			memoTitle: 'Data Array',
			memoContent: 'Anything you add to it (like the driversList in the above example) will be directly accessible in your views. For now, let’s just work with a dummy (static) data array, which we will replace later with our API service.'
		},
		{
			memoId: 4,
			memoDep: 'dr',
			memoDate: '01.10.15',
			memoTitle: 'Homework',
			memoContent: 'Next, we probably want to grab one specific user out of the returned collection from above. Let’s assume our users array looks like this:'
		},
		{
			memoId: 5,
			memoDep: 'mm',
			memoDate: '01.10.15',
			memoTitle: 'Leek & Bacon Egg Tottins',
			memoContent: 'Preheat oven to 400 degrees. Spray cups with canola oil. Line each cup with three potato tots and set aside. Add butter to a medium pan on medium heat, and sauté leeks 2-3 minutes until caramelized. Remove from pan and set aside in a medium bowl. Cook bacon in the same pan. Once crispy, remove to cool, blot dry, then chop into small pieces. Add bacon pieces to bowl of leeks, then stir in eggs, salt and pepper. Set bowl aside. Add three to four pinches of goat cheese on top of the potato tots in each cup. Then, evenly distribute the egg mixture among the cups. Bake for approximately 20-23 minutes until egg is cooked and tops have browned slightly. Allow to cool for a minute, then run a knife around the edges of each cup, carefully remove and place in a serving platter. Serve immediately.'
		}
  ];

  // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
  // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
  // service with a JSON service that gets its data from a remote server without having to changes anything
  // in the modules invoking the data service since the api is already async.

  return {
      findAll: function() {
          var deferred = $q.defer();
          deferred.resolve(memos);
          return deferred.promise;
      },

      findById: function(memoId) {
          var deferred = $q.defer();
          var memo = memos[memoId - 1];
          deferred.resolve(memo);
          return deferred.promise;
      },

      findByName: function(searchKey) {
          var deferred = $q.defer();
          var results = memos.filter(function(element) {
              var fullName = element.firstName + " " + element.lastName;
              return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
          });
          deferred.resolve(results);
          return deferred.promise;
      }
		}
})

.factory('WatchersService', function($q) {

  var watchers = [
  {
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
  }
  ];

  return {
		findAll: function() {
		    var deferred = $q.defer();
		    deferred.resolve(watchers);
		    return deferred.promise;
		}
	}

});