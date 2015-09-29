// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var notewatchApp = angular.module('notewatchapp', ['ionic', 'data.controllers', 'notewatchapp.services'])

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


// routs
notewatchApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('memos', {
    url: '/memos',
    templateUrl: 'templates/memos.html',
    controller: 'memosController',
    resolve: {
      allmemos: function(MemoService) {
        return MemoService.findAll();
      }
    }
  })

  .state('memo', {
    url: '/memo/:memoId',
    templateUrl: 'templates/memo.html',
    controller: 'memoController'
  });
  
  $urlRouterProvider.otherwise('/memos');

});


// memo (single) controller
notewatchApp.controller('memoController', function ($scope, $stateParams, MemoService) {
  MemoService.findById($stateParams.memoId).then(function(memo) {
    $scope.memo = memo;
  });
});

// memoS (all) controller
notewatchApp.controller('memosController', function ($scope, MemoService, $ionicLoading) {
 
  // list the memos
  var findAllMemos = function() {
      MemoService.findAll().then(function (memos) {
          $scope.memos = memos;
      });
  }
  findAllMemos();
  
  // call 'mixitup' plugin
  $scope.$on("$ionicView.enter", function() {
    jQuery(function(){
      jQuery('.rangeBlock').mixItUp({
        animation: {
            duration: 200,
            effects: 'scale'
        },
        callbacks: {
          onMixFail: function(state){
            console.log('No elements found matching ' + state.activeFilter);
          }
        }
      });
    });
  });

});

notewatchApp.controller('watchersController', function ($scope, WatchersService, $ionicLoading) {
  // list watchers
  var findAllWatchers = function() {
    WatchersService.findAll().then(function (watchers) {
        $scope.watchers = watchers;
    });
  }
  findAllWatchers();
});