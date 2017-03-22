angular.module('myApp')
    .controller('MyInfoCtrl', function($scope, $http) {
        $scope._id = localStorage.getItem('_id');
        $scope.user = {};
        $http.get('/player/?_id=' + $scope._id).then(function(rtn) {
            $scope.user = rtn.data.data;
        });

    });