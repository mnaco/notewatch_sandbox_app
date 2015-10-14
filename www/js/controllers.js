angular.module('memoapp.controllers', [])
  


//
// app controller
// 
.controller('appController', function ($scope){
  
  // toggle class of an element
  $scope.toggleClass = function (element, className) {
    $(element).toggleClass(className);
  }
})
// ----------------------------



//
// sprofile page controller
// 
.controller('profileController', function ($scope){

})
// ----------------------------



//
// settings page controller
// 
.controller('settingsController', function ($scope){

})
// ----------------------------



//
// login page controller
//
.controller('loginController', function ($scope){

})
// ----------------------------


//
// memo (single) controller
// ----------------------------
//
.controller('memoController', function ($scope, $stateParams, MemoService) {
  MemoService.findById($stateParams.memoId).then(function (memo) {
    $scope.memo = memo;
  });
})
// ----------------------------



// 
// read memos from SERVICE controller
//
.controller('memosController', function ($scope, MemoService, $ionicLoading) {

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
})
// ----------------------------


// 
// read watchers from SERVICE
//
/*
.controller('watchersFromServiceController', function ($scope, WatchersService, $ionicLoading) {
  var findAllWatchers = function() {
    WatchersService.findAll().then(function (watchers) {
        $scope.watchers = watchers;
    });
  }
  findAllWatchers();
})
*/
// ----------------------------



//
// read watchers from JSON controller
// 
.controller('watchersFromJsonController', function ($scope, $http) {
  $scope.wathcers = [];
  $http.get('/json/watchers.json')
    .success(function(data) {
      $scope.watchers = data;
    })
    .error(function(data, status){
      console.log(data + ':' + status);
    });
})
// ----------------------------


//
// read memos from JSON
// 
/*
.controller('memosFromJsonController', ['$scope', '$http', function ($scope, $http) {
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
}])
*/
// ----------------------------
