angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap'
]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/index.html',
        controller: 'IndexCtrl'
    }).when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'HomeCtrl'
    }).when('/my', {
        templateUrl: 'pages/my.html',
        controller: 'MyCtrl'
    }).when('/myInfo', {
        templateUrl: 'pages/my-info.html',
        controller: 'MyInfoCtrl'
    }).when('/objectInfo/:objectId', {
        templateUrl: 'pages/object-info.html',
        controller: 'ObjectInfoCtrl'
    })
}).controller('IndexCtrl', function($scope, $http, $route, $location) {
    /**用户默认的数据 */
    $scope.user = {
        name: '杨杰',
        phone: 13212780816,
        gender: '男',
        school: '文华学院',
        age: 18,
        tags: [{
            tagName: '我的社交名片',
            values: [],
            options: ['文艺青年', '普通青年', '有为青年', '2B青年', '学生', 'IT民工', '自由职业者', '上班族', '潜力股', '创业者', '技术宅', '小清新', '月光族', '乐活族']
        }, {
            tagName: '我的兴趣爱好',
            options: ["K歌", "旅行", "果粉", "购物狂", "美食", "电影", "摄影", "游戏", "手机控", "读书", "动漫", "爱狗", "爱猫", "运动", "电视剧", "桌游"],
            values: ['K歌']
        }, {
            tagName: '我的个性',
            values: ['成熟'],
            options: [
                "成熟",
                "各种宅",
                "幽默",
                "爱时尚",
                "执着",
                "温柔",
                "直率",
                "闷骚",
                "善良",
                "低调",
                "自由",
                "阳光",
                "乐观",
                "完美主义",
                "强迫症",
                "自信",
                "萌萌哒"
            ]
        }, {
            tagName: '我现在的状态',
            values: [
                '起床困难户'
            ],
            options: [
                "起床困难户",
                "奋斗ing",
                "加班ing",
                "学习ing",
                "减肥ing",
                "寂寞ing",
                "缺爱ing",
                "成长ing"
            ]
        }, {
            tagName: '我的口头语',
            values: ['Word天'],
            options: [
                "Word天",
                "猴赛雷",
                "厉害了",
                "我也是醉了",
                "你咋不上天嘞",
                "蓝瘦香菇",
                "洪荒之力",
                "小目标",
                "宝宝委屈",
                "撩妹 / 撩汉",
                "感觉身体被掏空",
                "画面太美不敢看带我装逼带我飞",
                "吓死宝宝了",
                "开黑",
                "老司机"
            ]
        }, {
            tagName: '我的超能力（ 牛逼的人生无须解释）',
            values: ['舌头打桃结'],
            options: [
                "舌头打桃结",
                "记忆力超强",
                "过目不忘",
                "力大无穷",
                "晒不黑",
                "狂吃不胖",
                "没生过病",
                "睁眼睡觉",
                "耳朵能动",
                "一字马",
                "单个眉毛动",
                "舌头舔鼻子",
                "对眼",
                "口吞拳头",
                "长时憋气"
            ]
        }, {
            tagName: '我的业余时间安排',
            values: ['王者荣耀'],
            options: [
                "王者荣耀",
                "英雄联盟",
                "看书",
                "篮球",
                "手机",
                "电影",
                "音乐",
                "涨知识",
                "逛街",
                "健身",
                "约好友",
                "旅行",
                "娱乐八卦"
            ]
        }],
        anwsers: [{
                question: "我看过的一部深有感触的电影",
                value: '曾经看过《初恋50次》，很轻松很浪漫，温馨感动、每天都有激情，每天都是新鲜的，虽然余生都只能靠记忆延续，但生命因此而充实。',
                fullLength: 50

            }, {
                question: "最近爱听的一首歌",
                value: "最近特别爱听《凉凉》，大爱古风，歌词好美，最爱那句“若回忆终不能相认，就让情分落九尘”",
                fullLength: 50

            }, {
                question: "心中男神/女神",
                value: "有一种相遇，一眼凝神，便是永恒；有一种心动，一生一次，只为一人，胡歌无可替代。",
                fullLength: 50

            }, {
                question: "曾经看过的一本书",
                value: "曾经看过《我心深处》，觉得世界很可悲，但人总要创造点什么价值来，虽然没什么用，但总是要活下去！",
                fullLength: 50

            }, {
                question: "心目中理想的Ta",
                value: "希望他是一个有趣的人，能和我来一次灵魂深处的交流！",
                fullLength: 50

            }, {
                question: "我的爱情宣言",
                value: "不忘初心，方得始终",
                fullLength: 50

            },
            {
                question: "为什么想参加恋爱体验站活动?",
                value: "相遇就是一场缘分，希望通过这种奇妙的相遇，谈一场不分手的恋爱！",
                fullLength: 50
            }
        ],
        filterAge: {
            label: '比自己大',
            value: 'old'
        },
        filterGender: {
            label: '异性恋',
            value: 'different'
        },

        filterCity: {
            label: '同城恋爱',
            value: 'sameCity'
        }

    };
    // 默认注册的步数
    $scope.level = 1;
    $scope.signup = function() {
        console.log($scope.user);
        $http.post('/player/', $scope.user).then(function(rtn) {
            var result = rtn.data;
            if (result.issuccess) {
                localStorage.setItem('_id', result.data._id)
                $location.url('/home');
            } else {
                alert(result.data);
            }

        })
    };

    /**
     * @param level 填写信息的步数
     * 检查用户的数据是否填写完整,
     * 第一步:   name,phone,gender,school,age
     * 第二步:  
     */

    $scope.nextLevel = function(level) {
        if ($scope.level == 1) {
            var checkParams = ['name', 'phone', 'gender', 'age'];
            if (checkParams.every(function(param) { return $scope.user[param]; }) && /^1[3-9]\d{9}$/.test($scope.user.phone)) {
                $http.get('/player/isExisit?phone=' + $scope.user.phone).then(function(rtn) {
                    if (rtn.data.data) {
                        alert('该手机号已经注册了');

                    } else {

                        $scope.goNext();
                    }

                })

            } else {
                alert('信息不完整')
            }
        } else if ($scope.level == 2) {
            var checkParams = 'tags';
            if ($scope.user.tags.every(function(tag) {
                    return tag.values.length > 0;
                })) {
                $scope.goNext();
            } else {
                alert('信息不完整');
            }

        } else {
            $scope.signup();
        }
    };

    $scope.goNext = function() {
        $scope.level++;
        console.log($scope.level);
    }

    $scope.addTagValue = function(tag, option) {
        if (tag.values.length >= 3) {
            return;
        } else {
            tag.values.push(option);
        }

    };
    $scope.deleteValue = function(tag, value) {
        tag.values.splice(tag.values.indexOf(value), 1);
    };
    /**
     * 自动登录主页
     */
    if (localStorage.getItem('_id')) {
        $location.url('/home');
    }


})