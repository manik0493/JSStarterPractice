
import angular from 'angular';




angular.module("Myapp", ['ngMaterial'])
  .controller("MainController", MainController)


function MainController() {
 
}
angular.module('Myapp').component('helloWorld', {
  template: `<h2>{{ctrl.msg}}</h2>
  <button ng-click="ctrl.changeMsg()">Click Me</button>
  `,
  controller: helloWorldCtrl,
  controllerAs: 'ctrl',
  bindings: {
    msg: '<',
    onMsgChanged: '&'
  }
});

function helloWorldCtrl() {
  var vm = this;

  vm.changeMsg = function () {
    vm.onMsgChanged({ childMsg: 'hello from child' });
  };
}

angular.module('Myapp').component('myApp', {
  template: '<hello-world msg="ctrl.msg" on-msg-changed="ctrl.handleMsgChange(childMsg)"></hello-world>',
  controller: MyAppCtrl,
  controllerAs: 'ctrl'
});

MyAppCtrl.$inject = ['$http'];
function MyAppCtrl($http) {
  var vm = this;

  vm.handleMsgChange = function (msg) {
    vm.msg = msg;
  };


  vm.$onInit = function () {
    vm.msg = "Hello world from my app";
  };

}
