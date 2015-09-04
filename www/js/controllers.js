angular.module('starter.controllers', [])
    
.controller('memoListCtrl', function ($scope) {
  $scope.toDoListItems = [{
	avatar: 'p.jpg',
	date: '01.01.16',
	content: 'not done'
  }, {
	avatar: 'm.jpg',
	date: '01.01.16',
	content: 'not done'
  }]
});


