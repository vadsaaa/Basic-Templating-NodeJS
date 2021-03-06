
templatingApp.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './home/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: './about/about.html',
            controller: 'AboutController'
        });

    $urlRouterProvider.otherwise('/home');
});
