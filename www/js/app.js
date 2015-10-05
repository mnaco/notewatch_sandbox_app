// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var notewatchApp = angular.module('notewatchapp', ['ionic', 'notewatchapp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


//
// routs
//
notewatchApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  // app container (re menu)
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'appController',
  })

  // memos
  .state('app.memos', {
    url: '/memos',
    views: {
      'menuContent': {
        templateUrl: 'templates/memos.html',
        controller: 'memosController',
      }
    },
    resolve: {
      allmemos: function(MemoService) {
        return MemoService.findAll();
      }
    }
  })

  // single memo
  .state('app.memo', {
    url: '/memo/:memoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/memo.html',
        controller: 'memoController'
      }
    }
  })

  // settings
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsController'
      }
    }
  });
  
  $urlRouterProvider.otherwise('app/memos');

});


//
// app controller
//
notewatchApp.controller('appController', function ($scope){
  
});


// 
// settings controller
//
notewatchApp.controller('settingsController', function ($scope){

});


//
// directive needs to call a function after data loaded (mixitup)
//
notewatchApp.directive('onFinishRender', function ($timeout) {
  return {
      restrict: 'A',
      link: function (scope, element, attr) {
          if (scope.$last === true) {
              $timeout(function () {
                  scope.$emit('ngRepeatFinished');
              });
          }
      }
  }
});
// ----------------------------


// memo (single) controller
notewatchApp.controller('memoController', function ($scope, $stateParams, MemoService) {
  MemoService.findById($stateParams.memoId).then(function (memo) {
    $scope.memo = memo;
  });
});


//
// read memos from SERVICE
//
notewatchApp.controller('memosController', function ($scope, MemoService, $ionicLoading) {

  var findAllMemos = function() {
    MemoService.findAll().then(function (memos) {
      $scope.memos = memos;
      // call mixitup
      $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        jQuery(function() {
          jQuery('.rangeBlock').mixItUp({
            animation: {
              duration: 200,
              effects: 'scale'
            }
          });
        });
      });
    });
  }
  findAllMemos();
});
// ----------------------------


// 
// read watchers from SERVICE
//
/*
notewatchApp.controller('watchersFromServiceController', function ($scope, WatchersService, $ionicLoading) {
  var findAllWatchers = function() {
    WatchersService.findAll().then(function (watchers) {
        $scope.watchers = watchers;
    });
  }
  findAllWatchers();
});
*/
// ----------------------------


//
// read watchers from JSON
// 
notewatchApp.controller('watchersFromJsonController', function ($scope, $http) {
  $scope.wathcers = [];
  $http.get('/json/watchers.json')
    .success(function(data) {
      $scope.watchers = data;
    })
    .error(function(data, status){
      console.log(data + ':' + status);
    });
});
// ----------------------------


//
// read memos from JSON
// 
/*
notewatchApp.controller('memosFromJsonController', ['$scope', '$http', function ($scope, $http) {
  $http.get('/json/memos.json')
    .success(function (result) {
      $scope.memos = result;
      $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        jQuery(function() {
          jQuery('.rangeBlock').mixItUp({
            animation: {
                duration: 200,
                effects: 'scale'
            }
          });
        });
      });
    })
    .error(function (data, status) {
      console.log(data + ',' + status)
    });
}]);
*/
// ----------------------------

