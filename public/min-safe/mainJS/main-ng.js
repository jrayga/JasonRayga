var app = angular.module("app_module", ["ngRoute", "ngAnimate"]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  // $routeProvider
  //   .when("/", {
  //     controller: "About",
  //     templateUrl: "partials/sections/about.html",
  //   })
  //   .otherwise({
  //     redirectTo: "/",
  //   });

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
  $scope.didHoverName = false;
  $scope.nav = "intro";
  $scope.yearNow = new Date().getFullYear();

  $scope.goTo = function (scrollTo) {
    $scope.nav = scrollTo;
    $anchorScroll(scrollTo);
  };

  $scope.worksImgAndDesc = [
    {
      title: "RATS (Recruiters Applicant Tracking Software)",
      desc: "Recruiters Applicant Tracking Software, or RATS, proudly stands as the pioneering Filipino-developed Applicant Tracking Software and Resume Bank. This cutting-edge platform is equipped with a comprehensive suite of powerful and innovative features and functionalities, specifically designed to empower recruiters and assist companies in optimizing their hiring strategy. RATS revolutionizes the recruitment process by providing recruiters with a centralized and efficient platform to manage job applications and track candidate progress seamlessly. Its intuitive interface simplifies the screening and evaluation of resumes, ensuring recruiters can quickly identify top talent and make informed hiring decisions. With RATS, recruiters gain access to a robust Resume Bank, where a vast pool of qualified candidates is readily available. This feature streamlines candidate sourcing and enables recruiters to tap into a diverse talent pool, accelerating the hiring process and enhancing the overall recruitment experience. Beyond its core functionalities, RATS offers advanced tools for data analytics and reporting, enabling recruiters to gain valuable insights into their recruitment metrics and optimize their hiring strategies based on real-time data. Moreover, the platform is continuously updated to incorporate the latest industry trends and emerging recruitment practices, ensuring that recruiters stay ahead in a highly competitive job market. By leveraging RATS, recruiters and companies can enhance their efficiency, streamline their hiring process, and make data-driven decisions, ultimately contributing to their overall recruitment success and fostering long-term growth.",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/RATSLogo.png",
      url: "https://www.linkedin.com/in/rats-global-5a79a3145/",
      shortDesc:
        "RATS is the first Filipino developed Applicant Tracking Software and Resume Bank",
    },
    {
      title: "Q App",
      desc: "Introducing Queue, a revolutionary mobile application available for iOS and Android that transforms the way commuters secure seats in UV Express terminals. Say goodbye to the hassle of standing in long queues and welcome a convenient and time-saving solution to your daily commute. With Queue, commuters can virtually queue for their desired UV Express ride, eliminating the need to physically stand in line. The application uses advanced GPS technology and real-time data to provide accurate information about the estimated waiting time, available seats, and upcoming departures. Here's how it works: Simply download the Queue app, create your profile, and select your desired UV Express terminal. The app will display a virtual queue where you can secure your spot remotely. As your turn approaches, Queue will send you real-time notifications, ensuring that you are aware of your boarding time and any updates. Not only does Queue save you precious time by eliminating the need to physically wait in line, but it also enhances your overall commuting experience. You can use the app to track the location of your approaching UV Express vehicle, allowing you to plan your departure accordingly and avoid unnecessary wait times at the terminal. Queue prioritizes efficiency, convenience, and user satisfaction. It empowers commuters by providing them with a seamless and stress-free way to secure a seat in public transportation. Say goodbye to the frustrations of traditional queueing and embrace the future of commuting with Queue.",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/queue_logo.png",
      url: "https://q.inciteasia.co",
      shortDesc:
        "A mobile application that allows commuters to virtually queue",
    },
    {
      title: "DaGAT (Data Gathering & Analytics Tool)",
      desc: "DAGAT is an innovative web-based platform developed by BSD (formerly known as PBE) designed to revolutionize sustainability data gathering. This comprehensive tool empowers organizations to collect, analyze, and visualize data with ease. By utilizing DAGAT, companies can establish a systematic and efficient process for managing sustainability data, paving the way for improved decision-making and impactful sustainability initiatives. With DAGAT, data collection becomes streamlined and more accurate, eliminating the need for manual and disparate data sources. The platform offers powerful analysis capabilities, allowing businesses to uncover valuable insights and identify key trends in their sustainability performance. Additionally, DAGAT provides intuitive visualization tools that transform complex data sets into compelling visual representations, making it easier to communicate progress and engage stakeholders effectively. By leveraging the capabilities of DAGAT, BSD empowers companies to embrace sustainable practices, measure their environmental impact, and make data-driven decisions to drive positive change. This groundbreaking platform serves as a catalyst for organizations seeking to advance their sustainability efforts and achieve meaningful results in an increasingly eco-conscious world.",
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/dagat-icon.png",
      url: "https://bsdph.org/",
      shortDesc: "Web-based platform for sustainability Data Gathering",
    },
    {
      title: "SDGs Our Biz Sustainability Web Tool",
      desc: "Introducing SDGs Our Biz Sustainability Web Tool, a powerful web-based platform that offers a comprehensive overview of how Philippine businesses are actively contributing to the Sustainable Development Goals (SDGs). This innovative tool serves as a central hub for tracking and understanding the sustainable practices and initiatives undertaken by companies across various sectors. With SDGs Our Biz, users can access a wealth of information and insights regarding the alignment of businesses with the SDGs. The platform provides detailed profiles of companies, highlighting their specific contributions to each SDG. Users can explore individual company reports, which showcase key sustainability metrics, targets achieved, ongoing projects, and future goals. The web tool offers intuitive visualization features, enabling users to analyze and compare the sustainability performance of different companies. Through interactive charts, graphs, and maps, users can gain a comprehensive understanding of the collective efforts being made by businesses in driving sustainable development in the Philippines. Additionally, SDGs Our Biz serves as a valuable resource for knowledge-sharing and collaboration. It offers a platform for companies to share best practices, success stories, and lessons learned in their sustainability journey. Users can engage in discussions, access resources, and connect with like-minded individuals and organizations, fostering a collaborative ecosystem focused on sustainable development. By harnessing the power of SDGs Our Biz Sustainability Web Tool, businesses, policymakers, investors, and stakeholders can gain valuable insights into the progress being made towards achieving the SDGs in the Philippines. The platform enables informed decision-making, promotes transparency, and encourages continuous improvement in sustainable practices. Together, we can create a more sustainable future for the nation and contribute to the global efforts for a better world.",
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
    {
      title: "Kandado",
      desc: `The "Kandado" app is a powerful tool that helps you create secure
      and unique passwords for all of your online accounts. With advanced
      algorithms and a database of common passwords, this app ensures that
      your passwords are virtually impossible to crack. Simply enter the
      desired password length and customize the characters you want to
      include, and the app does the rest. Protect your online accounts
      with the "Kandado" app today!`,
      img: "https://raw.githubusercontent.com/jrayga/JasonRayga/master/ASSETS/img/kandado.jpg",
      url: "https://drive.google.com/file/d/1g1gpwSCxF_QKYeDuVF3r9f41cRXWhmtI/view?usp=sharing",
      shortDesc:
        "Kandado is a powerful tool that helps you create secure and unique passwords for all of your online accounts.",
    },
  ];
}]);
