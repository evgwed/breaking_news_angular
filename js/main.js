var app = angular.module("app", []);

app.controller("AppCtrl", function($scope, $http) {

    $http.get('http://localhost:8888/angular/data/items.json').then(function(data){
        $scope.items = data.data;
    }).catch(function(error){
        console.log(error);
    });
});