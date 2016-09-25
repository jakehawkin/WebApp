(function () {
    'use strict';

    angular.module('app.dashboardController', [])
        .controller("dashboardController", function () {
            var vm = this;
            vm.title = 'This is the Dashboard';
        })
})();
