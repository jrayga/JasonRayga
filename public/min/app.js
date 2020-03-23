var app = angular.module('app_module', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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
    $locationProvider.hashPrefix('!');
}]);
app.controller('Index', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $scope.nav = 'aboutMe';

    $scope.goTo = function (scrollTo) {
        console.log("TCL: $scope.goTo -> scrollTo", scrollTo)
        $scope.nav = scrollTo;
        $location.hash(scrollTo);
        $anchorScroll();
    };
}]);
app.controller('About', ['$scope', '$window', '$location', '$anchorScroll', function ($scope, $window, $location, $anchorScroll) {

    $scope.worksImgAndDesc = [
        {
            title: 'RATS (Recruiters Applicant Tracking Software)',
            desc: 'Recruiters Applicant Tracking Software or RATS is the first Filipino developed Applicant Tracking Software and Resume Bank packed with powerful and innovative features and functionalities empowering every recruiter and helping every company in their hiring strategy.',
            img: './ASSETS/img/RATSLogo.png',
            url: 'https://ratsglobal.com'
        },
        {
            title: 'Q App',
            desc: 'A mobile application (iOS and Android) that allows commuters to virtually queue instead of standing in line in terminals just to secure a seat in public transportation',
            img: './ASSETS/img/queue_logo.png',
            url: 'https://q.inciteasia.co'
        },
        {
            title: 'DaGAT (Data Gathering & Analytics Tool)',
            desc: 'Is a web-based platform for sustainability Data Gathering made by PBE that will aid in data collection, analysis, and visualization. This will also enable the company to establish a systematic process for sustainability data management moving forward.',
            img: './ASSETS/img/dagat-icon.png',
            url: 'https://landing.pbe-sdt.com'
        },
        {
            title: 'SDGs Our Biz Sustainability Web Tool',
            desc: 'A web-based platform to look at how Philippine Businesses are contributing to the Sustainable Development Goals',
            img: './ASSETS/img/sdgbizphbiz_logo_blue.png',
            url: 'https://input.sdgsbiz.ph/content/contributions'
        }
    ];

    $scope.featuresAndModules = ['Online Registration Link', 'Career Portal', 'Online Test', 'Email And Text Blasting Notifications', 'Interview Scheduling', 'Data Gathering Tool', 'Applicant Tracking System', 'Android and iOS Applications'];
    $scope.programmingLanguagesUsed = ['AngularJS 1.x', 'SQL & NoSQL (Firebase)', 'PHP', 'HTML & CSS & SCSS', 'BootStrap 3.x. & 4.x', 'Angular 2+ & AngularFire2', 'Javascript & Typescript', 'Ionic 4+']

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
        var element = document.querySelector("#" + scrollTo);
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };
}]);
