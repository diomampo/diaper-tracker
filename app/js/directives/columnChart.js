'use strict';

angular.module('DiaperTrackerApp')
  .directive('columnChart', function () {
    return {
      restrict: 'E',
      link: function($scope, element, attrs) {

        //Width and height
        var w = element[0].parentNode.clientWidth;
        var h = 100;
        var barPadding = 1;
        
        //Create SVG element
        var svg = d3.select("column-chart")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

        var dataset = $scope.diaperHistory;
        $scope.$watchCollection('diaperHistory', function(newCollection, oldCollection){
          dataset = newCollection;
          drawChart();
        });

        attrs.$observe('field', function(value){
          drawChart();
        });

        $scope.$watch('chartProperties', function(newValue, oldValue){
          drawChart();
        }, true);

        var drawChart = function() {
          svg.selectAll("rect").remove();

          svg.selectAll("rect")
             .data(dataset)
             .enter()
             .append("rect")
             .attr("x", function(d, i) {
                return i * (w / dataset.length);
             })
             .attr("y", function(d) {
                return h - (d[attrs.field] * 10);
             })
             .attr("width", w / dataset.length - barPadding)
             .attr("height", function(d) {
                return d[attrs.field] * 10;
             });
        };

      }
    };
  });
