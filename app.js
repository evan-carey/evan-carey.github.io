webpackJsonp([0],[function(n,t,o){"use strict";function e(n,t,o){"ngInject";o.state("app",{redirectTo:"app.home",abstract:!0,component:"app"}),n.html5Mode(!1),t.otherwise("/")}function r(n){"ngInject";n.theme("default").primaryPalette("blue").accentPalette("green")}e.$inject=["$locationProvider","$urlRouterProvider","$stateProvider"],r.$inject=["$mdThemingProvider"];var i=o(1),c=o(3),m=o(5),u=o(6);o(10),t.App=i.module("app",["ui.router","ngMessages","ngMaterial","ngAria","ngAnimate",m.Common,u.Components]).config(e).config(r).component("app",new c.AppComponent).name},,,function(n,t,o){"use strict";var e=function(){function n(){this.template=o(4),this.controller=r}return n}();t.AppComponent=e;var r=function(){function n(){"ngInject"}return n.prototype.$onInit=function(){},n.prototype.$onChanges=function(n){},n}();t.AppController=r},function(n,t){n.exports='<div>\r\n\t<!--<nav></nav>-->\r\n\r\n\t<!-- content -->\r\n\t<div class="content">\r\n\t\t<ui-view></ui-view>\r\n\t</div>\r\n\r\n</div>'},function(n,t,o){"use strict";var e=o(1);t.Common=e.module("common",[]).name},function(n,t,o){"use strict";var e=o(1),r=o(7);t.Components=e.module("components",[r.Home]).name},function(n,t,o){"use strict";function e(n){"ngInject";n.state("app.home",{url:"/",component:"home"})}function r(){}e.$inject=["$stateProvider"];var i=o(1),c=o(8);t.Home=i.module("components.home",[]).component("home",new c.HomeComponent).config(e).run(r).name},function(n,t,o){"use strict";var e=function(){function n(){this.controller=r,this.template=o(9)}return n}();t.HomeComponent=e;var r=function(){function n(){"ngInject"}return n.prototype.$onInit=function(){},n}()},function(n,t){n.exports='<div layout-padding layout="column" class="home">\r\n\t<h1 class="md-headline">Home</h1>\r\n\t<div class="md-body-1">\r\n\r\n\t\t<md-content>\r\n\t\t\tHome Page Content\r\n\t\t</md-content>\r\n\t</div>\r\n</div>'},function(n,t){}]);
//# sourceMappingURL=app.js.map