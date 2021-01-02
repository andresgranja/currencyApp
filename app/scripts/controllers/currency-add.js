'use strict';

/**
 * @ngdoc function
 * @name currencyApp.controller:currencyAddCtrl
 * @description
 * # currencyAddCtrl
 * Controller of the currencyApp
 */
angular.module('currencyApp')
  .controller('currencyAddCtrl', function ($scope, $window, currencyFactory, countryFactory) {
    
    $scope.country = { id: 0, country: '', code: '', currency: '', symbol: '' };    
    $scope.countries = countryFactory.getCountries();
    $scope.currencyFormat = { idCurrency: '', formatCurrency: '0', showCents: '99', symbolBefore: '0', shownCurrency: '0', idCountry: 0 };
  
    $scope.loadCountry = function() {
        $scope.country = countryFactory.getCountry($scope.country.id);
        $scope.currencyFormat.idCurrency = $scope.country.code + $scope.country.id;
        $scope.currencyFormat.idCountry = $scope.country.id;
    };
    
    $scope.saveCurrency = function() {
      const res = currencyFactory.saveCurrency($scope.currencyFormat);
      if (res) {
        $window.alert('Item Added...');
      } else {
        $window.alert('Warning, item has already been added');
      }
    };

    // $scope.getCountry = function(id) {
    //   var a = countryFactory.getCountry(id);
    //   console.log(a);
    // };

    // $scope.getFormat = function(id) {
    //   var a = formatFactory.getFormat(id);
    //   console.log(a);
    // };
  }
  
);
