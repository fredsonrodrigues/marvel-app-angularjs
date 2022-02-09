const API_KEY = `<key-id>`;
const API_ADDRESS = `https://gateway.marvel.com:443/v1`

angular.module('myApp.service', ['ngResource'])
    .factory('Heroes', ['$resource',
        function ($resource) {
            return $resource(API_ADDRESS+'/public/characters:heroId?apikey='+API_KEY+'&nameStartsWith=:search', {}, {
                query: {
                    method: 'GET',
                    params: { search: '' },
                    isArray: true
                },
                findHero: {
                    method: 'GET',
                    params: { heroId: '' },
                    url: API_ADDRESS+'/public/characters/:heroId?apikey='+API_KEY+'&nameStartsWith=:search'
                }
            });
        }
    ]);