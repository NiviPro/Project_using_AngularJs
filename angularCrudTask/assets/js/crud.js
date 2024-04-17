
var app = angular.module("myApp", []);
app.controller("myCtrl1", function ($scope) {
    $scope.newstudent = [];

    $scope.user_Name;
    $scope.user_Addr;
    $scope.user_Dept;
    $scope.count = 0;

    $scope.saveFun = function () {
        $scope.insertDetails = { rollNo: $scope.count, name: $scope.user_Name, address: $scope.user_Addr, dept: $scope.user_Dept };
        $scope.newstudent.push($scope.insertDetails);
        console.log($scope.newstudent);
        $scope.count++;
    }
    $scope.del = function (index) {
        $scope.newstudent.splice(index,1);
    }

    $scope.edit = function (index) {
        $scope.user_Name=$scope.newstudent[index].name;
       $scope.user_Addr=$scope.newstudent[index].address;
       $scope.user_Dept=$scope.newstudent[index].dept;
    }
});