'use strict';

/**
 * @ngdoc function
 * @name currencyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the currencyApp
 */
angular
    .module('currencyApp')
    .controller('AboutCtrl', function ($scope, countryFactory, formatFactory) {
        $scope.countries = countryFactory.getCountries();

        $scope.getCountry = function (id) {
            var a = countryFactory.getCountry(id);
            console.log(a);
        };

        $scope.getFormat = function (id) {
            var a = formatFactory.getFormat(id);
            console.log(a);
        };
    });
