angular.module('memoapp.directives', [])

//
// directive needs to call a function after data loaded (mixitup)
// 
.directive('onFinishRender', function ($timeout) {
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
})
// ----------------------------

;