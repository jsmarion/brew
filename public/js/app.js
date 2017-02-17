/**
 * Created by johns on 12/29/2016.
 */

// public/js/app.js-not used
var myApp = angular.module('sampleApp', ['ngRoute', 'ngCart', 'appRoutes', 'MainCtrl', 'NerdService', /*'BestsellersCtrl', */'BarsoapCtrl', 'HaircareCtrl', 'CologneCtrl', 'ShaveCtrl', 'GiftsCtrl', 'GearCtrl', 'ProductsCtrl', 'CheckoutCtrl']);



myApp.controller('BestsellersController', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {

    $scope.foreground_image = '/images/BestSellers-xxl.png';
    $scope.big_text = 'best sellers';
    $scope.medium_text = 'soap, cologne and more';
    $scope.small_text = 'Handmade soaps, organic colognes, and hand curated cigar gift boxes. The Squatch has you covered and smellin good.';
}]);