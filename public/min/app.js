var app = angular.module('app_module', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'About',
                templateUrl: 'partials/about.html'
            })
        .otherwise(
            {
                redirectTo: '/'
            })
}]);
app.controller('Index', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $scope.nav = 'aboutMe';

    $scope.goTo = function (scrollTo) {
        $scope.nav = scrollTo;
        $location.hash(scrollTo);
        $anchorScroll();
    };
}]);
app.controller('About', ['$scope', '$window', '$location', '$anchorScroll', function ($scope, $window, $location, $anchorScroll) {

    $scope.works_img_and_desc = [
        {
            title: 'RATS Global : Dashboard',
            desc: 'ratglobal.com Landing page.',
            img: './ASSETS/img/ratsglobaldashboard.png'
        },
        {
            title: 'RATS Global : Login Page',
            desc: 'ratglobal.com Login page.',
            img: './ASSETS/img/ratsgloballogin.png'
        },
        {
            title: 'RATS AOMOS : Login Page',
            desc: 'ratglobal.com Landing page.',
            img: './ASSETS/img/ratsglobalLoginpage.png'
        },
        {
            title: 'RATS Global & AOMOS : Applicant Online Registration Link',
            desc: 'ratglobal.com Applicant Online Registration Link.',
            img: './ASSETS/img/ratsregistapp.png'
        },
        {
            title: 'Thinkaomos : Email Notification and Marketing and Sales Introductory',
            desc: 'thinkaomos.com Email Notification and Marketing and Sales Introductory',
            img: './ASSETS/img/thinkaomos.png'
        }
    ];

    $scope.featuresAndModules = ['Online Registration Link', 'Career Portal', 'Online Test', 'Email And Text Blasting Notifications', 'Interview Scheduling', 'Data Gathering Tool', 'Android and IoS Applications'];
    $scope.programmingLanguagesUsed = ['AngularJS 1.x', 'SQL', 'PHP', 'HTML & CSS', 'BootStrap 3.x.', 'Angular 2+', 'AngularFire2', 'Ionic', 'SCSS', 'NoSQL (Firebase)']

    $scope.gotoFB = function () {
        $window.open("https://www.facebook.com/jsonryga");
    }

    $scope.gotoGmail = function () {
        $window.open("mailto:raygajason@gmail.com");
    }

    $scope.gotoLinkedin = function () {
        $window.open("https://www.linkedin.com/in/jason-rayga-250950141/");
    }

    $scope.goTo = function (scrollTo) {
        console.log("TCL: $scope.goTo -> scrollTo", scrollTo)
        $location.hash(scrollTo);
        $anchorScroll();
    };
}]);
