/**
 * Created by Por Zhang on 15/11/11.
 * Email: porzhang@gmail.com
 */
function detailController($scope,$routeParams,$timeout,$location){
    $scope.mapsInfo = mapsDB[$routeParams.id]

    $scope.timer = function(){
        console.log("重新计时")
        $timeout.cancel( times )
        times = $timeout(function () {
            $location.path('/')
        }, OUT_TIME)
    }
}