'use strict';

angular.module('DiaperTrackerApp')
  .controller('MainCtrl', function ($scope) {

    $scope.selectedType = "pee";

    $scope.chartProperties = {
      field : 'peeCount'
    }

/*
    $scope.trashBin = [
      {id: _.uniqueId, time: "3/1/2014 00:25", type: 'pee'},
      {id: _.uniqueId, type: 'poo'},
      {id: _.uniqueId, type: 'both'}
    ];
*/

    $scope.diaperHistory = [
      {id: _.uniqueId, date: "3/1/2014", peeCount: 1, pooCount:1, bothCount:0},
      {id: _.uniqueId, date: "3/2/2014", peeCount: 2, pooCount:2, bothCount:1},
      {id: _.uniqueId, date: "3/3/2014", peeCount: 5, pooCount:3, bothCount:2},
      {id: _.uniqueId, date: "3/4/2014", peeCount: 4, pooCount:1, bothCount:2}
    ];

    $scope.updateChartField = function(type) {
      $scope.chartProperties.field = type + 'Count';
      $scope.selectedType = type;
    };

    $scope.addDiaper = function(type) {
      $scope.updateChartField(type);

      //I just wanted to use lodash for something
      var d = new Date( _.now() );
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //Months are zero based
      var curr_year = d.getFullYear();

      //@todo make this a timestamp and use ng-filter
      var now = curr_month + '/' + curr_date + '/' + curr_year;

      var diaper = {
        id: _.unique,
        date: now,
        type: type
      };

      //probably a cleaner way to do this in lodash
      for( var i = 0; i < $scope.diaperHistory.length; i++ ){
        if( $scope.diaperHistory[i].date == diaper.date ){
          $scope.diaperHistory[i][type+'Count']++;
          return;
        }
      }

      var historyObj = {
        id: _.uniqueId,
        date: diaper.date,
        peeCount: 0,
        pooCount: 0,
        bothCount: 0
      };
      historyObj[type + 'Count']++;
      $scope.diaperHistory.push(historyObj);
    };

  });