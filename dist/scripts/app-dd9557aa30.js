!function(){"use strict";angular.module("gpSocial",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr","angAccordion"])}(),function(){"use strict";function e(e){this.login=function(){return e.get("api/login")},this.logout=function(){return e.get("api/logout")}}function t(e){this.login=function(){return e.get("app/components/authorisation/mock/login.mock.json")},this.logout=function(){return e.get("app/components/authorisation/mock/logout.mock.json")}}e.$inject=["$http"],t.$inject=["$http"],angular.module("gpSocial").service("authorisationService",e).service("authorisationServiceMock",t).config(["$provide",function(e){e.decorator("authorisationService",["$delegate","authorisationServiceMock",function(e,t){return e=t}])}])}(),function(){"use strict";function e(e){this.getProfile=function(){return e.get("https://fathomless-everglades-3680.herokuapp.com/api/user/1").then(function(e){return e.data})},this.saveProfile=function(t){return e.post("https://fathomless-everglades-3680.herokuapp.com/api/user/1",t)}}e.$inject=["$http"],angular.module("gpSocial").service("profileService",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html"};return e}angular.module("gpSocial").directive("socialNavbar",e)}(),function(){"use strict";angular.module("gpSocial").controller("NavbarController",["$scope","$timeout","$mdSidenav","$log",function(e,t,r,o){function i(e){return function(){r(e).toggle().then(function(){o.debug("toggle "+e+" is done")})}}e.toggleLeft=i("left"),e.menuSections=[{name:"My profile",state:{name:"profile"}},{name:"Log Out",state:{name:"login"}}]}])}(),function(){"use strict";function e(e,t){var r=this;r.genders={M:"Male",F:"Female"},e.getProfile().then(function(e){r.user=e}),r.submitForm=function(){r.userForm.$valid&&alert("our form is amazing")},r.save=function(){t.info("save"),r.message=!0,e.saveProfile(r.user).then(function(){})}}e.$inject=["profileService","$log"],angular.module("gpSocial").controller("ProfileController",e)}(),function(){"use strict";function e(){return{require:"ngModel",link:function(e,t,r,o){o.$validators.checkLastNameDirective=function(t){return e.lastNameError=!0,o.$isEmpty(t)?(e.lastNameError=!1,e.lastNameErrorText="Last Name should exist",e.lastNameError):t.length>=3&&t.length<=20?(e.lastNameErrorText="Last Name should contain at least 3 letters",e.lastNameError=!0,e.lastNameError):(e.lastNameError=!1,e.lastNameError)}}}}angular.module("gpSocial").directive("checkLastNameDirective",e)}(),function(){"use strict";function e(){return{require:"ngModel",link:function(e,t,r,o){o.$validators.checkFirstNameDirective=function(t){return e.firstNameError=!0,o.$isEmpty(t)?(e.firstNameError=!1,e.firstNameErrorText="First Name should exist",e.firstNameError):t.length>=3&&t.length<=20?(e.firstNameErrorText="First Name should contain at least 3 letters",e.firstNameError=!0,e.firstNameError):(e.firstNameError=!1,e.firstNameError)}}}}angular.module("gpSocial").directive("checkFirstNameDirective",e)}(),function(){"use strict";function e(){return{require:"ngModel",link:function(e,t,r,o){o.$validators.checkAgeDirective=function(t){return e.ageError=!0,o.$isEmpty(t)?(e.ageError=!1,e.ageErrorText="Age should exist",e.ageError):t>=3&&150>=t?(e.ageError=!0,e.ageErrorText="Your Age should be between 3 and 150 years",e.ageError):(e.ageError=!1,e.ageError)}}}}angular.module("gpSocial").directive("checkAgeDirective",e)}(),function(){"use strict";function e(e,t,r){var o=this;o.enter=function(){t.info("get"),e.login().then(function(){r.go("profile")})}}e.$inject=["authorisationService","$log","$state"],angular.module("gpSocial").controller("LoginController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("gpSocial").run(e)}(),function(){"use strict";function e(e,t){e.state("login",{url:"/",templateUrl:"app/login/login.html",controller:"LoginController",controllerAs:"login"}).state("profile",{url:"/profile",templateUrl:"app/profile/profile.html",controller:"ProfileController",controllerAs:"profile"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gpSocial").config(e)}(),function(){"use strict";angular.module("gpSocial").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("gpSocial").config(e)}(),angular.module("gpSocial").run(["$templateCache",function(e){e.put("app/login/login.html",'<md-toolbar class="toolbar"><div class="md-toolbar-tools"><h1 class="logo">facepalmbook</h1></div></md-toolbar><div><md-button class="md-raised md-primary login-button" ng-click="login.enter()">Log In</md-button></div>'),e.put("app/profile/profile.html",'<social-navbar></social-navbar><div class="wrapper"><div class="user-avatar"><img width="40%" ng-src="{{ profile.user.avatar }}"></div><h1 class="greeting"><p>Hi, {{ profile.user.firstName + " " + profile.user.lastName }}!</p></h1><form name="userForm"><ang-accordion one-at-a-time="true" icon-position="right" close-icon-url="assets/images/right-icon.png" open-icon-url="assets/images/down-icon.png"><collapsible-item item-title="FIRST NAME: {{profile.user.firstName}}"><md-input-container class="input"><input class="form-control" name="firstName" ng-model="profile.user.firstName" check-first-name-directive="" ng-minlength="3" ng-maxlength="12" required=""><p ng-show="userForm.firstName.$error.checkFirstNameDirective" class="help-block">{{firstNameErrorText}}</p></md-input-container></collapsible-item><collapsible-item item-title="LAST NAME: {{profile.user.lastName}}"><md-input-container class="input"><input class="form-control" name="lastName" ng-model="profile.user.lastName" check-last-name-directive="" ng-minlength="3" ng-maxlength="12" required=""><p ng-show="userForm.lastName.$error.checkLastNameDirective" class="help-block">{{LastNameErrorText}}</p></md-input-container></collapsible-item><collapsible-item item-title="AGE: {{profile.user.age}}"><md-input-container><input class="form-control" type="number" name="userAge" ng-model="profile.user.age" check-age-directive="" ng-min="5" ng-max="150" required=""><p ng-show="userForm.userAge.$error.checkAgeDirective" class="help-block">{{ageErrorText}}</p></md-input-container></collapsible-item><collapsible-item item-title="GENDER: {{ profile.genders[profile.user.gender] }}"><div class="selecteGender"><md-input-container class="md-block" flex-gt-sm=""><md-select ng-model="profile.user.gender"><md-option ng-repeat="(genderKey, gender) in profile.genders" value="{{ genderKey }}">{{ gender }}</md-option></md-select></md-input-container></div></collapsible-item></ang-accordion></form><md-button type="submit" name="submitButton" ng-click="profile.save()" class="md-raised md-primary" ng-disabled="userForm.firstName.$error.checkFirstNameDirective || userForm.lastName.$error.checkLastNameDirective|| userForm.userAge.$error.checkAgeDirective">Save</md-button><span ng-show="profile.message">Saved!</span></div>'),e.put("app/components/navbar/home.html","<h1>HELLO!</h1>"),e.put("app/components/navbar/navbar.html",'<div ng-controller="NavbarController" layout="column" ng-cloak=""><md-toolbar class="toolbar"><div class="md-toolbar-tools"><md-button class="md-icon-button" aria-label="menu" ng-click="toggleLeft()"><md-icon class="menu-icon-button" md-svg-icon="assets/images/ic_menu_24px.svg"></md-icon></md-button></div></md-toolbar><md-sidenav class="md-sidenav-left" md-component-id="left"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">MENU</h1></md-toolbar><md-content layout-padding=""><md-list-item ng-repeat="section in menuSections"><li><a ui-sref="{{section.state.name}}">{{section.name}}</a></li></md-list-item></md-content></md-sidenav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-dd9557aa30.js.map
