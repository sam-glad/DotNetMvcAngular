﻿var AngularAndMVC = angular.module('AngularAndMVC', ['ngRoute']);

AngularAndMVC.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider
        .when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}
configFunction.$inject = ['$routeProvider'];

AngularAndMVC.config(configFunction);