
//
// routes
//

angular.module('memoapp.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider



  // 
  // app container (menu)
  //
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'appController',
  })
  // ----------------------------



  //
  // memos
  // 
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
  // ----------------------------



  //
  // single memo
  // 
  .state('app.memo', {
    url: '/memo/:memoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/memo.html',
        controller: 'memoController'
      }
    }
  })
  // ----------------------------



  //
  // settings
  // 
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsController'
      }
    }
  })
  // ----------------------------



  //
  // login
  //
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      }
    }
  })
  // ----------------------------

  ;
  
  // default
  $urlRouterProvider.otherwise('app/memos');

});