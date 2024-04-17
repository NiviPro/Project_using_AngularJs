var app = angular.module("heloWorld", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("homeleft", {
            url: "/firstPage",
            template: '<h3>This is a First Page....</h3>',
            controller : "ctr1"
        })

        .state("homecenter", {
            url: "/secondPage",
            templateUrl: './assets/js/pages/secondPage.html',
            controller : "ctr2"
        })

        .state("homeright", {
            url: "/thirdPage",
            template: '<h3>This is a third Page....</h3>',
            controller : "ctr3"
        })

        .state("root", {
            url: "/",
            template: '<h3>Please click anything ....</h3>',
            controller : "ctr3"
        });

        $urlRouterProvider.otherwise("/");
});

app.controller("ctr1", function ($scope) {

})

app.controller("ctr2", function ($scope) {
        $scope.pageNo = 03;
        $scope.text = "Hello everyone!....." 
})