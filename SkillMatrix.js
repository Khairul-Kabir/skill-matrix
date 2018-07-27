var app = angular.module('SkillMatrix', []); //create model
app.controller("Skill", function ($scope) { //create controller
$scope.items = [];
$scope.addItem = function (item) {  //to add item
    if(item.name!=null){
        $scope.items.push(item);
        $scope.item = {};
    }else{
        alert("Please Enter your Name");
    }
},
$scope.removeItem = function (index) {   //to remove item
console.log(index);
$scope.items.splice(index, 1)
},
$scope.editItem = function (index) { //to edit item
$scope.editing = $scope.items.indexOf(index);
}
});