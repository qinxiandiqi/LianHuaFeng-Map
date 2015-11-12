/**
 * Created by Por Zhang on 15/11/11.
 * Email: porzhang@gmail.com
 */


function mapController($scope,$timeout){
    $scope.mapsDB = mapsDB;

    $timeout(function(){
        $(window).trigger('resize');
    },500)
}