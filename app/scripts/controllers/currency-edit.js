'use strict';

/**
 * @ngdoc function
 * @name currencyApp.controller:currencyEditCtrl
 * @description
 * # currencyEditCtrl
 * Controller of the currencyApp
 */
angular.module('currencyApp')
  .controller('currencyEditCtrl', function ($scope, $window, $routeParams, currencyFactory, countryFactory) {
    
    //$scope.currencyFormat = { idCurrency: '', formatCurrency: '0', showCents: '99', symbolBefore: '0', shownCurrency: '0', idCountry: 0 };
    const paramId = $routeParams.id;
    currencyFactory.getCurrencies().map(function (c) {
      if (c.idCurrency === paramId) {
        $scope.currencyFormat = {
          idCurrency: c.idCurrency,
          shownCurrency: c.shownCurrency.toString(),
          formatCurrency: c.formatCurrency,
          symbolBefore: c.symbolBefore.toString(),
          showCents: c.showCents.toString(),
          idCountry: c.idCountry  
        };
      }
      
    });
    $scope.country = countryFactory.getCountry($scope.currencyFormat.idCountry);   

    $scope.EditCurrency = function() {
      const res = currencyFactory.updateCurrency($scope.currencyFormat);
      if (res) {
        $window.alert('Item Updated...');
      } else {
        $window.alert('Warning, it was an error...');
      }
    };

    // $scope.saveCurrency = function() {
    //   const res = currencyFactory.saveCurrency($scope.currencyFormat);
    //   if (res) {
    //     $window.alert('Item Added...');
    //   } else {
    //     $window.alert('Warning, item has already been added');
    //   }
    // };
  }  
);
