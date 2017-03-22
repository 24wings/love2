angular.module('myApp')
    .controller('HomeCtrl', function($scope, $http) {
        $scope._id = localStorage.getItem('_id');
        $scope.user = {};
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.avatar = {};
        // 第一个轮播
        var slides = $scope.slides = [{ image: 'images/1.jpg' }, { image: 'images/2.jpg' }, { image: 'images/3.jpg' }, { image: 'images/4.jpg' }];

        // 第二个轮播
        $scope.slides2 = [{ image: 'images/11.jpg' }, { image: 'images/22.jpg' }, { image: 'images/33.jpg' }];

        $http.get('/player/?_id=' + $scope._id).then(function(rtn) {
            $scope.user = rtn.data.data;
            console.log($scope.user);
        });

        $scope.joinParty = function() {
            $http.get('/player/joinParty/' + $scope._id).then(function(rtn) {
                console.log(rtn);
            });
        };

        $scope.selectFile = function() {
            document.getElementById('fileInput').click();

        };
        $scope.viewAvatar = function(file) {
            // var file = document.getElementById('fileInput').files[0];
            console.log(file);
            console.log('修改文件')
        }

    });