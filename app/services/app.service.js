angular.module('myApp.service', ['ngResource'])
    .factory('Heroes', ['$resource',
        function ($resource) {
            return $resource('https://jsonplaceholder.typicode.com/todos/:todoId', {}, {
                query: {
                    method: 'GET',
                    params: { todoId: '' },
                    isArray: true
                }
            });
        }
    ]);