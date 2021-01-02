'use strict';

angular.module('currencyApp')
    .value('version', '1.0')
    .factory('currencyFactory', function() {
        var currency = {idCurrency: '', formatCurrency: '', showCents: 0, symbolBefore: 0, shownCurrency: 0, idCountry: 0};
        var currencies = [
            {
                idCurrency: 'USD1',
                formatCurrency: '1', 
                showCents: 2, // '4.0-0',
                symbolBefore: 2,
                shownCurrency: 1, // code
                idCountry: 1
            },
            {
                idCurrency: 'EUR5',
                formatCurrency: '2', 
                showCents: 0, // '4.0',
                symbolBefore: 1,
                shownCurrency: 2, // 'symbol'
                idCountry: 5
            }
        ];
        return {
            getCurrencies: function() {
                return currencies;
            },
        
            getCurrency: function(id) {
                currencies.map(function(x) {
                    if (x.idCurrency === id) {
                        currency = x;
                    }
                });
                return currency;
            },

            saveCurrency: function(currencyFormat) {
                var res = false;
                const resCountry = currencies.filter( function(c) {
                    return c.idCurrency === currencyFormat.idCurrency; }).length;    
                if (resCountry === 0) {
                    currency = {
                        idCurrency: currencyFormat.idCurrency,
                        formatCurrency: currencyFormat.formatCurrency,
                        showCents: Number(currencyFormat.showCents),
                        symbolBefore: Number(currencyFormat.symbolBefore),
                        shownCurrency: Number(currencyFormat.shownCurrency),
                        idCountry: Number(currencyFormat.idCountry)
                    };
                    currencies.push(currency);
                    res = true;
                } else { res = false; }
        
                return res;
            },

            updateCurrency: function(data) {
                var res;
                currencies.map( function(currency) {
                    if (currency.idCurrency === data.idCurrency) {
                        currency.formatCurrency = data.formatCurrency;
                        currency.showCents = Number(data.showCents);
                        currency.shownCurrency = Number(data.shownCurrency);
                        currency.symbolBefore = Number(data.symbolBefore);
                        res = true;
                    }
                });
                return res;
            }
        };
    }
);