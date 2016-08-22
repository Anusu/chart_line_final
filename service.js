//Defining Factories

app.factory('dataFactory', ['$http', function($http) {

 
    var dataFactory = {};

    dataFactory.getdata = function () {
        return $http.get('data.json');
    };

    return dataFactory;
}]);