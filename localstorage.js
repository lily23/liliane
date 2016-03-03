var myApp;

myApp = angular.module("myModule", []);

myApp.controller("myController", function(LS) {
    
  this.greeting = "This is a localstorage";
  this.value = LS.getData();
  this.latestData = function() {
      
    return LS.getData();
  };
  this.update = function(val) {
    return LS.setData(val);
  };
});
myApp.factory("LS", function($window, $rootScope) {
    
  return {
    setData: function(val) {
      $window.localStorage && $window.localStorage.setItem('my-storage', val);
      return this;
    },
    getData: function() {
      return $window.localStorage && $window.localStorage.getItem('my-storage');
    }
  };
});