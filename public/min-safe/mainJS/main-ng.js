var app = angular.module("app_module", ["ngRoute", "ngAnimate"]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  // $routeProvider
  //     .when('/',
  //         {
  //             controller: 'About',
  //             templateUrl: 'partials/about.html'
  //         })
  //     .otherwise(
  //         {
  //             redirectTo: '/'
  //         })

  // Check browser support
  // $locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">
  // To know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase
  // If you don't wish to set base URL then use this
  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true,
    });
  }
}]);
app.controller("Index", ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
  $scope.didHoverName = null;
  $scope.nav = "intro";
  $scope.yearNow = new Date().getFullYear();

  $scope.goTo = function (scrollTo) {
    $scope.nav = scrollTo;
    $anchorScroll(scrollTo);
  };

  $scope.hoveredName = function () {
    $scope.didHoverName =
      $scope.didHoverName === null ? false : $scope.didHoverName;
    $scope.didHoverName = $scope.didHoverName === false ? true : false;
  };

  $scope.worksImgAndDesc = [
    {
      title: "RATS (Recruiters Applicant Tracking Software)",
      desc: "Recruiters Applicant Tracking Software or RATS is the first Filipino developed Applicant Tracking Software and Resume Bank packed with powerful and innovative features and functionalities empowering every recruiter and helping every company in their hiring strategy.",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/RATSLogo.png",
      url: "https://www.linkedin.com/in/rats-global-5a79a3145/",
      shortDesc:
        "RATS is the first Filipino developed Applicant Tracking Software and Resume Bank",
    },
    {
      title: "Q App",
      desc: "A mobile application (iOS and Android) that allows commuters to virtually queue instead of standing in line in terminals just to secure a seat in public transportation",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/queue_logo.png",
      url: "https://q.inciteasia.co",
      shortDesc:
        "A mobile application that allows commuters to virtually queue",
    },
    {
      title: "DaGAT (Data Gathering & Analytics Tool)",
      desc: "Is a web-based platform for sustainability Data Gathering made by BSD (Formerly known as PBE) that will aid in data collection, analysis, and visualization. This will also enable the company to establish a systematic process for sustainability data management moving forward.",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/dagat-icon.png",
      url: "https://bsdph.org/",
      shortDesc: "Web-based platform for sustainability Data Gathering",
    },
    {
      title: "SDGs Our Biz Sustainability Web Tool",
      desc: "A web-based platform to look at how Philippine Businesses are contributing to the Sustainable Development Goals",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/sdgbizphbiz_logo_blue.png",
      url: "https://sdgsbiz.ph/docroot/",
      shortDesc: "Sustainable Development Goals",
    },
    {
      title: "Project Moses",
      desc: "Project Moses is a Crisis Response Toolbox that aims to be an all-in-one platform for Filipinos in times of calamity and crisis mainly and should still be relevant even in times of peace. It is a publicly accessible collaboration toolbox using Information Communication Technology (ICT) meant to connect crisis response actors. The tools are to meant to address the issues on lack of relevant and real-time information to help stop the wildfire of misinformation and promote information that would assuage fears, understand risk, implement effective social distancing and improve our public health.",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/project-moses.jpg",
      url: "https://www.projectmoses.ph/",
      shortDesc:
        "A Crisis Response Toolbox that aims to be an all-in-one platform for Filipinos in times of calamity",
    },
  ];
}]);
