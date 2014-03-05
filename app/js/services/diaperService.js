'use strict';

angular.module('DiaperTrackerApp')
  .service('DiaperService', function diaperService($rootScope, $timeout, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.disposeDiaper = function(diaper) {
      if( localStorage.diaperCollection ) {
        localStorage.diaperCollection.push(diaper);
      }
      else {
        localStorage.diaperCollection = [];
      }
    }

    var deferred = $q.defer();

    /*
    this.getCollection = function() {
      var numItems = 10;
      var collection = [];
      for( var i = 0; i < numItems; i++ ) {
        var item = {
          uid: i, 
          label: "Some Label " + i, 
          severityMap: {MAJOR:0, CRITICAL:0},
          color: colors[i]
        };
        collection.push (item);
      }

      //without wrapping this into a Timeout I was getting a
      //$digest already in progress error
      $timeout(function(){
        $rootScope.$apply(function() {
          deferred.resolve(collection);
        });
      }, 1000);
        
      return deferred.promise;
    }
    */
  });
