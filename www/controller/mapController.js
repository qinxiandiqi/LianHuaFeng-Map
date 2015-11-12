/**
 * Created by Por Zhang on 15/11/11.
 * Email: porzhang@gmail.com
 */


function mapController($scope,$timeout,$location){
    $scope.mapsDB = mapsDB;

    $timeout(function(){
        $(window).trigger('resize');
    },500)

    $scope.timer = function(){
        console.log("开始倒计时")
        $timeout.cancel( times )
        times = $timeout(function () {
            $location.path('/')
        }, OUT_TIME)
    }


}