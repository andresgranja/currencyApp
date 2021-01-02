'use strict';

angular.module('currencyApp')
    .value('version', '1.0')
    .factory('countryFactory', function() {
        var country = { id: 0, country: '', code: '', currency: '', symbol: '' };
        var countries = [
            {
                id: 0,
                country: 'Select a country...',
                code: '',
                currency: '',
                symbol: '',
            },
            {
                id: 1,
                country: 'United States',
                code: 'USD',
                currency: 'United States Dollar',
                symbol: '$',
            },
            {
                id: 2,
                country: 'Argentina',
                code: 'ARS',
                currency: 'Argentine Peso',
                symbol: '$',
            },
            {
                id: 3,
                country: 'Australia',
                code: 'AUD',
                currency: 'Australian Dollar',
                symbol: '$',
            },
            {
                id: 4,
                country: 'Brazil',
                code: 'BRL',
                currency: 'Brazilian Real',
                symbol: 'R$',
            },
            {
                id: 5,
                country: 'Spain',
                code: 'EUR',
                currency: 'EURO',
                symbol: '€',
            },
            {
                id: 6,
                country: 'Germany',
                code: 'EUR',
                currency: 'EURO',
                symbol: '€',
            },
            {
                id: 7,
                country: 'United kingdom',
                code: 'GBP',
                currency: 'Pound Sterling',
                symbol: '£',
            }
        ];
        return {
            getCountries: function() {
                return countries;
            },
        
            getCountry: function(id) {
                countries.map(function(x) {
                    if (x.id === id) {
                        country = x;
                    }
                });
                return country;
            }
        };
    }
);