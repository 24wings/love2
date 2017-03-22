angular.module('myApp')
    .controller('ObjectInfoCtrl', function($scope, $routeParams, $http) {
        var _id = localStorage.getItem('_id');
        $scope.user = {};
        $http.get('/player/?_id=' + _id).then(function(rtn) {
            $scope.user = rtn.data.data;

        })
    });