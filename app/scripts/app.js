'use strict';

/**
 * @ngdoc overview
 * @name vitrineApp
 * @description
 * # vitrineApp
 *
 * Main module of the application.
 */
angular
  .module('vitrineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/education', {
            templateUrl: 'views/education.html',
            controller: 'EducationCtrl'
        })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/hobbies', {
        templateUrl: '../views/hobbies.html',
        controller: 'HobbiesCtrl'
      })
      .when('/work', {
        templateUrl: '../views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
