!function(){"use strict";angular.module("gpSocial",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr","angAccordion"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("gpSocial").service("webDevTec",t)}(),function(){"use strict";function t(){var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html"};return t}angular.module("gpSocial").directive("socialNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,o,a){var i,r=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function n(t,e){function n(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("gpSocial").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function a(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(o+"/contributors?per_page="+n).then(a)["catch"](i)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:n};return a}t.$inject=["$log","$http"],angular.module("gpSocial").factory("githubContributor",t)}(),function(){"use strict";function t(t){function e(){console.log("save"),t.data("POST")}var n=this;n.genders="Male Female".split(" ").map(function(t){return{gen:t}}),n.saveClick=e}angular.module("gpSocial").controller("ProfileController",t),t.$inject=["requestService"]}(),function(){"use strict";function t(t,e,n){function o(){i(),t(function(){r.classAnimation="rubberBand"},4e3)}function a(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function i(){r.awesomeThings=e.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1455380686673,r.showToastr=a,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("gpSocial").controller("MainController",t)}(),function(){"use strict";function t(t){function e(){console.log("get"),t.data("GET")}var n=this;n.loginClick=e}angular.module("gpSocial").controller("LoginController",t),t.$inject=["requestService"]}(),function(){"use strict";function t(t){var e=this;return console.log("пришёл"),{data:function(n){console.log("пришёл"),"GET"==n&&(console.log("Гет метод"),t({method:"GET",url:"/api.com/list"}).success(function(t){e.user=t,console.log(e.user)}),e.users={name:"Alex",age:19}),"POST"==n&&(console.log("пост метод"),t({method:"POST",url:"/api.com/list",data:e.user}))}}}angular.module("gpSocial").factory("requestService",t),t.$inject=["$http"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("gpSocial").run(t)}(),function(){"use strict";function t(t,e){t.state("login",{url:"/",templateUrl:"app/login/login.html",controller:"LoginController",controllerAs:"login"}).state("profile",{url:"/profile",templateUrl:"app/profile/profile.html",controller:"ProfileController",controllerAs:"profile"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("gpSocial").config(t)}(),function(){"use strict";angular.module("gpSocial").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("gpSocial").config(t)}(),angular.module("gpSocial").run(["$templateCache",function(t){t.put("app/login/login.html",'<social-navbar></social-navbar><h1>Login page</h1><div><form action="" ng-cloak="" ng-controller="LoginController"><md-button type="" href="#/profile" ng-click="login.loginClick()" class="md-raised md-primary">Log-In</md-button></form></div>'),t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content><header><acme-navbar creation-date="main.creationDate"></acme-navbar></header><section class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class="main.classAnimation" ng-click="main.showToastr()">Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class="md-title">{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class="md-action-buttons"><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/profile/profile.html",'<social-navbar></social-navbar><h1>Profile page</h1><p>{{profile.user}}</p><div class="wrapper" ng-controller="ProfileController"><div class="user-avatar"><img src="img/user_avatar.png"></div><form action="" ng-cloak=""><div class="greeting"><p>HI, {{user.name}}</p></div><ang-accordion one-at-a-time="true" icon-position="right" close-icon-url="bower_components/angular-accordion/images/right-icon.png" open-icon-url="bower_components/angular-accordion/images/down-icon.png"><collapsible-item item-title="NAME"><md-input-container class="input"><label>NAME:</label> <input ng-model="user.name"></md-input-container></collapsible-item><collapsible-item item-title="AGE"><md-input-container><label>AGE:</label> <input type="number" ng-model="user.age"></md-input-container></collapsible-item><collapsible-item item-title="GENDER"><div class="selecteGender"><md-input-container class="md-block" flex-gt-sm=""><label>Selected gender: {{user.gender}}</label><md-select ng-model="user.gender"><md-option ng-repeat="gender in profile.genders" value="{{gender.gen}}">{{gender.gen}}</md-option></md-select></md-input-container></div></collapsible-item></ang-accordion><md-button type="" ng-click="profile.saveClick()" class="md-raised md-primary">Save</md-button></form></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar><div class="md-toolbar-tools"><md-button class="md-icon-button" aria-label="pizza"><a href="http://www.pizza.by/"><md-icon md-svg-icon="assets/images/ic_menu_24px.svg"></md-icon></a></md-button></div></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-ff4cfedc2e.js.map
