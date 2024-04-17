
var app = angular.module("myApp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("login", {
            url: "/firstPage",
            templateUrl: './assets/js/pages/firstPage.html'
        })

    $stateProvider
        .state("transaction", {
            url: "/secondPage",
            templateUrl: './assets/js/pages/secondPage.html'
        })     
        
    $stateProvider
        .state("successfull", {
            url: "/thirdPage",
            templateUrl: './assets/js/pages/thirdPage.html'
        });     
 
    $urlRouterProvider.otherwise("/");
});

app.controller('userCtrl', function($scope, $state) {
    $scope.users = [
        {
            id: 1,
			name: "John",
			upi: 001,
			acc: 7586,
			amt: 650,
			frnds: [{id: 2}, {id: 3}, {id: 4}]
		},
		{
            id: 2,
			name: "Praveen",
			upi: 002,
			acc: 7590,
			amt: 550,
			frnds: [{id: 1}, {id: 3}, {id: 4}]
		},
		{
            id: 3,
			name: "Sharmi",
			upi: 003,
			acc: 4536,
			amt: 250,
			frnds: [{id: 2}, {id: 1}, {id: 4}]
		},
		{
            id: 4,
			name: "Ragul",
			upi: 004,
			acc: 6723,
			amt: 380,
			frnds: [{id: 1}, {id: 2}, {id: 3}]
		}
    ]

    $scope.name;
    $scope.upi;
    $scope.submit = function() {
        $scope.users.forEach(function (data) {
            if (data.name == $scope.name && data.upi == $scope.upi) {
                alert("Logined Successfully :)");
                $state.go("transaction");
               // $scope.user_name = document.getElementById("name").value;
               // document.getElementById('this_user').textContent = `${user_name}`;
            }else{
                alert("Please give your valid data :(");
            }
        })
       
    }
 
    $scope.u_name;
    $scope.acc;
    $scope.amt;
    $scope.get_value = function (index) {
        $scope.u_name=$scope.users[index].name;
        $scope.acc=$scope.users[index].acc;
        $scope.amt=$scope.users[index].amt;
    }
});