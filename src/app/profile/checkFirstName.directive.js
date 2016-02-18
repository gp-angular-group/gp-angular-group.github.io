(function() {
  'use strict';

  angular
    .module('gpSocial')
    .directive('checkFirstNameDirective', checkFirstNameDirective);

  /** @ngInject */
  function checkFirstNameDirective(){
    var vm = this;

    return {
      require: 'ngModel',
      link: function (scope, element, attributes, ctrl) {
          ctrl.$validators.checkFirstNameDirective = function (modelValue, viewValue) {
              scope.firstNameError = true;
              if (ctrl.$isEmpty(modelValue)) // if empty, correct value
              {   
                  scope.firstNameError = false;
                  scope.firstNameErrorText = 'First Name should exist';
                  return scope.firstNameError;
              }
              if (modelValue.length >= 3 && modelValue.length <= 20){ // correct value
                  scope.firstNameErrorText = 'First Name should contain at least 3 letters';
                  scope.firstNameError = true;
                  return scope.firstNameError;
              }else{
                scope.firstNameError = false;
                return scope.firstNameError;
              }
          };
      }
    };
  };

})();