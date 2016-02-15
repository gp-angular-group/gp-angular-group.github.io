!function(){"use strict";angular.module("gpSocial",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr","angAccordion"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("gpSocial").service("webDevTec",t)}(),function(){"use strict";function t(t){this.getProfile=function(){return t.get("api/profile")},this.saveProfile=function(e){return t.post("api/profile",e)}}function e(t){this.getProfile=function(){return t.get("app/components/profile/mock/getProfile.mock.json")},this.saveProfile=function(){return t.get("app/components/profile/mock/saveProfile.mock.json")}}t.$inject=["$http"],e.$inject=["$http"],angular.module("gpSocial").service("profileService",t).service("profileServiceMock",e).config(["$provide",function(t){t.decorator("profileService",["$delegate","profileServiceMock",function(t,e){return t=e}])}])}(),function(){"use strict";function t(){var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html"};return t}angular.module("gpSocial").directive("socialNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,o,i){var r,a=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){a.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){a.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function n(t,e){function n(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return i.contributors=t,i.contributors})}var i=this;i.contributors=[],n()}n.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("gpSocial").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function i(t){return t.data}function r(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(o+"/contributors?per_page="+n).then(i)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:o,getContributors:n};return i}t.$inject=["$log","$http"],angular.module("gpSocial").factory("githubContributor",t)}(),function(){"use strict";function t(t){this.login=function(){return t.get("api/login")},this.logout=function(){return t.get("api/logout")}}function e(t){this.login=function(){return t.get("app/components/authorisation/mock/login.mock.json")},this.logout=function(){return t.get("app/components/authorisation/mock/logout.mock.json")}}t.$inject=["$http"],e.$inject=["$http"],angular.module("gpSocial").service("authorisationService",t).service("authorisationServiceMock",e).config(["$provide",function(t){t.decorator("authorisationService",["$delegate","authorisationServiceMock",function(t,e){return t=e}])}])}(),function(){"use strict";function t(t,e){var n=this;n.genders=["Male","Female"],t.getProfile().then(function(t){n.user=t.data}),n.saveClick=function(){e.info("save"),t.saveProfile(n.user).then(function(t){t.data.success&&(n.message="Saved!")})}}t.$inject=["profileService","$log"],angular.module("gpSocial").controller("ProfileController",t)}(),function(){"use strict";function t(t,e,n){function o(){r(),t(function(){a.classAnimation="rubberBand"},4e3)}function i(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),a.classAnimation=""}function r(){a.awesomeThings=e.getTec(),angular.forEach(a.awesomeThings,function(t){t.rank=Math.random()})}var a=this;a.awesomeThings=[],a.classAnimation="",a.creationDate=1455380686673,a.showToastr=i,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gpSocial").controller("MainController",t)}(),function(){"use strict";function t(t,e,n){var o=this;o.loginClick=function(){e.info("get"),t.login().then(function(){n.go("profile")})}}t.$inject=["authorisationService","$log","$state"],angular.module("gpSocial").controller("LoginController",t)}(),function(){"use strict";function t(t,e){var n=this;return e.info("пришёл"),{data:function(o){e.info("пришёл"),"GET"==o&&(e.info("Гет метод"),t({method:"GET",url:"/api.com/list"}).success(function(t){n.user=t,e.info(n.user)}),n.users={name:"Alex",age:19}),"POST"==o&&(e.info("пост метод"),t({method:"POST",url:"/api.com/list",data:n.user}))}}}angular.module("gpSocial").factory("requestService",t),t.$inject=["$http","$log"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("gpSocial").run(t)}(),function(){"use strict";function t(t,e){t.state("login",{url:"/",templateUrl:"app/login/login.html",controller:"LoginController",controllerAs:"login"}).state("profile",{url:"/profile",templateUrl:"app/profile/profile.html",controller:"ProfileController",controllerAs:"profile"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gpSocial").config(t)}(),function(){"use strict";angular.module("gpSocial").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("gpSocial").config(t)}(),angular.module("gpSocial").run(["$templateCache",function(t){t.put("app/login/login.html",'<social-navbar></social-navbar><h1>Login page</h1><div><form action="" ng-cloak="" ng-controller="LoginController"><md-button type="" href="#/profile" ng-click="login.loginClick()" class="md-raised md-primary">Log-In</md-button></form></div>'),t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content><header><acme-navbar creation-date="main.creationDate"></acme-navbar></header><section class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class="main.classAnimation" ng-click="main.showToastr()">Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class="md-title">{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class="md-action-buttons"><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/profile/profile.html",'<social-navbar></social-navbar><div class="wrapper"><div class="user-avatar"><img width="40%" ng-src="{{ profile.user.avatar }}"></div><h1 class="greeting"><p>Hi, {{profile.user.name}}!</p></h1><ang-accordion one-at-a-time="true" icon-position="right" close-icon-url="bower_components/angular-accordion/images/right-icon.png" open-icon-url="bower_components/angular-accordion/images/down-icon.png"><collapsible-item item-title="NAME"><md-input-container class="input"><label>NAME:</label> <input ng-model="profile.user.name"></md-input-container></collapsible-item><collapsible-item item-title="AGE"><md-input-container><label>AGE:</label> <input type="number" min="5" max="150" ng-model="profile.user.age"></md-input-container></collapsible-item><collapsible-item item-title="GENDER"><div class="selecteGender"><md-input-container class="md-block" flex-gt-sm=""><label>Selected gender: {{profile.user.gender}}</label><md-select ng-model="profile.user.gender"><md-option ng-repeat="gender in profile.genders" value="{{ gender }}">{{ gender }}</md-option></md-select></md-input-container></div></collapsible-item></ang-accordion><md-button type="" ng-click="profile.saveClick()" class="md-raised md-primary">Save</md-button><span>{{ profile.message }}</span></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar><div class="md-toolbar-tools"><md-button class="md-icon-button" aria-label="pizza"><a href="http://www.pizza.by/"><md-icon md-svg-icon="assets/images/ic_menu_24px.svg"></md-icon></a></md-button></div></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-3a0fd8680a.js.map
