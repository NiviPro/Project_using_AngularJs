var app = angular.module("myApp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("logIn", {
            url: "/loginPage",
            templateUrl: './assets/js/pages/logInPage.html'
        });  
    $stateProvider
        .state("signUp", {
            url: "/signupPage",
            templateUrl: './assets/js/pages/signupPage.html'
        })
    $stateProvider
        .state("bookingPage", {
            url: "/bookingPage",
            templateUrl: './assets/js/pages/bookingPage.html'
        })
    $stateProvider
        .state("completedPage", {
            url: "/completedPage",
            templateUrl: './assets/js/pages/completed.html'
        }); 
 
    $urlRouterProvider.otherwise("/");
});

app.controller('ctrl1', function($scope) {
$scope.alt_sign = function() {
    alert("You are not Already Login! Please Signup..");
}
});

app.controller('ctrl2', function($scope, $state) {
    $scope.submit = function() {
        if($scope.new_mail == null && $scope.usr_name == null){
        alert("Please give valid data");
    }else{
        $state.go("bookingPage");
    }
}
});

app.controller('ctrl4', function($scope) {
$scope.shows = [
    {
        id: 1,
        movie: "Avengers",
        time: "12.30 PM",
        tickets: 3
    },
    {
        id: 2,
        movie: "Spiderman",
        time: "11.00 AM",
        tickets: 2
    },
    {
        id: 3,
        movie: "Intersteller",
        time: "1.30 PM",
        tickets: 4
    }
]

$scope.showHideDiv = function() {
    if(!$scope.myDiv){
    $scope.myDiv = true;
    }else{
     $scope.myDiv = false;
     }
}

$scope.bevarages = [
    {
        item: "coke",
        rate: 70
    },
    {
        item: "water bottle",
        rate: 40
    },
    {
        item: "pop corn",
        rate: 100
    }
]

$scope.bvg = $scope.bevarages.rate;

$scope.showHideDiv2 = function() {
    if(!$scope.myDiv2){
    $scope.myDiv2 = true;
    }else{
     $scope.myDiv2 = false;
     }
}
});

app.controller('ctrl5', function($scope) {
    $scope.showHideDiv3 = function() {
        if(!$scope.myDiv3){
        $scope.myDiv3 = true;
        }else{
         $scope.myDiv3 = false;
         }
    }
    $scope.ticket = 200;
    $scope.get_qty;
    $scope.t_amt = $scope.ticket * $scope.get_qty;
});


app.controller('ctrl6', function($scope, $state) {
    $scope.success = function() {
        $state.go("completedPage");
}
});

app.controller('ctrl7', function($scope, $timeout) {
    if(!$scope.to_div){
        $timeout(function () {$scope.to_div = true;}, 100);
        $timeout(function () {$scope.to_div = false;}, 3000);
    }    
});


  