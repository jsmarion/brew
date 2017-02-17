angular.module('ProductsCtrl', [])
    .controller('ProductsController', function($scope, $http) {
        $http.get('/products').
        then(function(response) {
            $scope.products = response.data;
        });
    });
