'use strict';

/**
 * @ngdoc function
 * @name currencyApp.controller:currencylistCtrl
 * @description
 * # currencylistCtrl
 * Controller of the currencyApp
 */
angular.module('currencyApp')
  .filter('dot2comma', function($locale) {
    return function(input, id) {
   
        if (id === '1') {
          $locale.NUMBER_FORMATS.DECIMAL_SEP = ',';
          $locale.NUMBER_FORMATS.GROUP_SEP = '.';
          return input;
        } else {
          $locale.NUMBER_FORMATS.DECIMAL_SEP = '.';
          $locale.NUMBER_FORMATS.GROUP_SEP = ',';
          return input;
        }
      
    };
  })
  .controller('currencylistCtrl', function ($scope, $window, currencyFactory, countryFactory) {
    $scope.value = 1354.76;
    $scope.currency = [];
    
    currencyFactory.getCurrencies().map(function(c) {
      $scope.currencies = {
        idCurrency: c.idCurrency,
        country: countryFactory.getCountry(c.idCountry).country,
        currencyDetail: countryFactory.getCountry(c.idCountry).currency,
        code: countryFactory.getCountry(c.idCountry).code,
        showSymbol: countryFactory.getCountry(c.idCountry).symbol,
        showCurrency: c.shownCurrency,
        format: c.formatCurrency,
        symbol: c.symbolBefore,
        showCent: Number(c.showCents),
        idCountry: c.idCountry
      };
      $scope.currency.push($scope.currencies);
    });

    $scope.sort = {
      column: '',
      descending: false
    };    
  
    $scope.changeSorting = function(column) {
      var sort = $scope.sort;
      if (sort.column === column) {
          sort.descending = !sort.descending;
      } else {
          sort.column = column;
          sort.descending = false;
      }
    };
      
    $scope.selectedCls = function(column) {
        return column === $scope.sort.column && 'sort-' + $scope.sort.descending;
    };
    
    $scope.delete = function(id) {
      var res;
      $scope.currency.map( function(c, index) {
        if (c.idCurrency === id) {
            $scope.currency.splice(index, 1);
            res = true;
        } else { res = false; }
      });

      if (res) {
        $window.alert('Item Deleted...');
      } else {
        $window.alert('Error, item no found');
      }
    };
    
    $scope.exportToExcel = function() {
      var ws = XLSX.utils.json_to_sheet($scope.currency);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "sheet1");
      XLSX.writeFile(wb, "settings.xlsx");
    };
    
  }  
);
