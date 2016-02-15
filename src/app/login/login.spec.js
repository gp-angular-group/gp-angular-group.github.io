/*(function() {
  'use strict';

  angular
    .module('gpSocial')
    .run(function($httpBackend) {

      var phones = {name: 'Alex'}; 
        $httpBackend.whenGET('/api.com/list').respond(function(phones) {
          console.log("Getting phones");
          return [200, phones, {}];
        });
      $httpBackend.flush();
    });
    
  
})();
describe('LoginController', function(){
	var scope, controllerService, httpMock;
	var myPerson = {name: 'Alex', age: 19}
  beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
    scope = $rootScope.$new();
    controllerService = $controller;
    httpMock = $httpBackend;
  }));

  it("should get myPerson from '/api.com/list'", function () {
    httpMock.whenGET("api.com/list").respond(myPerson);
    ctrl = controllerService('LoginController', {$scope: scope});
    httpMock.flush();
    expect(scope.users).toBe(myPerson);
  });	
})
*/