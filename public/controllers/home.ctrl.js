angular.module('myApp')
    .controller('HomeCtrl', function($scope) {
        $scope._id = localStorage.getItem('_id');
        $scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        // 第一个轮播
        var slides = $scope.slides = [{ image: 'images/1.jpg' }, { image: 'images/2.jpg' }, { image: 'images/3.jpg' }, { image: 'images/4.jpg' }];

        // 第二个轮播
        $scope.slides2 = [{ image: 'images/11.jpg' }, { image: 'images/22.jpg' }, { image: 'images/33.jpg' }];




    });