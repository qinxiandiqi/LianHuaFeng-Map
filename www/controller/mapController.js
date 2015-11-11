/**
 * Created by Por Zhang on 15/11/11.
 * Email: porzhang@gmail.com
 */


function mapController($scope){
    $scope.mapsDB = mapsDB;

    setTimeout(function(){
        $(window).trigger('resize');
    },500)
}