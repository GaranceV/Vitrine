/**
 * Created by Garance on 01/04/2015.
 */
'use strict';

/*
yo angular:controller education crée tout lui-même
Exemple of simple parsing that works!
with education.json
angular.module('vitrineApp')
    .controller('EducationCtrl', function ($scope, $http) {
            $scope.education = $http.get("assets/education.json")
                .success(function(data) {
                $scope.education = data;
            })
                .error(function(error) {
                    Console.log(error); //pour le debug
                })
    }); */

angular.module('vitrineApp')
    .controller('EducationCtrl', function ($scope, $http) {
        $scope.myData = $http.get('assets/education.json')
            .success(function(data) {
                $scope.myData = data;
            })
            .error(function(error) {
                console.log(error); //pour le debug
            });
    });
