/**
 * Created by Por Zhang on 15/11/11.
 * Email: porzhang@gmail.com
 */

var lhf = angular.module('lhf', ['ngRoute','ngSanitize','rwdImageMaps'])

var lhfRouteConfig = function($routeProvider){
    $routeProvider.
        when("/",{
            controller:mapController,
            templateUrl:'./views/maps.html'
        }).
        when("/view/:id",{
            controller:detailController,
            templateUrl:'./views/details.html'
        })
}

lhf.config(lhfRouteConfig)
