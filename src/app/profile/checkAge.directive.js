(function() {
  'use strict';

 
angular
  .module('gpSocial')
  .directive('checkAgeDirective', checkAgeDirective);
  
  function checkAgeDirective(){
    return {
      require: 'ngModel',
      link: function (scope, element, attributes, ctrl) {
          ctrl.$validators.checkAgeDirective = function (modelValue) {
              scope.ageError = true;
              if (ctrl.$isEmpty(modelValue)) // if empty, correct value
              {   
                  scope.ageError = false;
                  scope.ageErrorText = 'Age should exist';
                  return scope.ageError;
              }
              if (modelValue >= 3 && modelValue <= 150){ // correct value
                  scope.ageError =  true;
                  scope.ageErrorText = 'Your Age should be between 3 and 150 years';
                  return scope.ageError;
              }else{
                scope.ageError = false;
                return scope.ageError;
              }
          };
      }
    };
  }



})();