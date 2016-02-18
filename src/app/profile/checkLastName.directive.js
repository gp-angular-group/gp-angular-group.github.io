(function() {
  'use strict';


angular
  .module('gpSocial')
  .directive('checkLastNameDirective', checkLastNameDirective);

  function checkLastNameDirective(){
    
    return {
      require: 'ngModel',
      link: function (scope, element, attributes, ctrl) {
          ctrl.$validators.checkLastNameDirective = function (modelValue) {
              scope.lastNameError = true;
              if (ctrl.$isEmpty(modelValue)) // if empty, correct value
              {   
                  scope.lastNameError = false;
                  scope.lastNameErrorText = 'Last Name should exist';
                  return scope.lastNameError;
              }
              if (modelValue.length >= 3 && modelValue.length <= 20){ // correct value
                  scope.lastNameErrorText = 'Last Name should contain at least 3 letters';
                  scope.lastNameError = true;
                  return scope.lastNameError;
              }else{
                scope.lastNameError = false;
                return scope.lastNameError;
              }
          };
      }
    };
  }




})();