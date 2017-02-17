/**
 * Created by johns on 12/29/2016.
 */

// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'CheckoutController'
        })

        .when('/collections/best-sellers', {
            templateUrl: 'views/bestsellers.html',
            controller: 'BestsellersController'
        })

        .when('/collections/bar-soap', {
            templateUrl: 'views/barsoap.html',
            controller: 'BarsoapController'
        })

        .when('/collections/hair-care', {
            templateUrl: 'views/haircare.html',
            controller: 'HaircareController'
        })

        .when('/collections/cologne', {
            templateUrl: 'views/cologne.html',
            controller: 'CologneController'
        })

        .when('/collections/shave', {
            templateUrl: 'views/shave.html',
            controller: 'ShaveController'
        })
        .when('/collections/gifts', {
            templateUrl: 'views/gifts.html',
            controller: 'GiftsController'
        })

        .when('/collections/gear', {
            templateUrl: 'views/gear.html',
            controller: 'GearController'
        })

        /* sample bundle */
    ;

    $locationProvider.html5Mode(true);
}]);