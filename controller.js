//Defining controller
app.controller('Ctrl', function ($scope,dataFactory) {
  
 dataFactory.getdata().success(function (data, status) {
    
    $scope.jsondatafeed = data.yData;
    $scope.PlotData =[];
    $scope.Plotcat =[];
    for (var key in $scope.jsondatafeed) {
      console.log($scope.jsondatafeed[key]); // the whole array (index)
      $scope.PlotData.push($scope.jsondatafeed[key]);
      //var category = data[key][].splice(1, 1);
      var category = $scope.jsondatafeed[key];
      $scope.Plotcat.push(category.name);
    }


//Chart Data    
    $scope.renderChart = {
        chart: {
            type: 'line'
        },
         
        series:  $scope.PlotData,
		
		 xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
         yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
    };
});
});