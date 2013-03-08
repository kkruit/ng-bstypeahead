/*global console, angular */
'use strict';
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('kkruit.directives').
  directive('kkTypeahead', function ($filter) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function ($scope, element, attrs, ngModel) {
				attrs.$observe('kkItems', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').items = $scope[value];
					} else {
						element.data('typeahead').items = parseInt(value);
					}
				});
				attrs.$observe('kkMinLength', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').minLength = $scope[value];
					} else {
						element.data('typeahead').minLength = parseInt(value);
					}
				});
				attrs.$observe('kkSource', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').source = $scope[value];
					}
				});
				attrs.$observe('kkMatcher', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').matcher = $scope[value];
					}
				});
				attrs.$observe('kkSorter', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').sorter = $scope[value];
					}
				});
				attrs.$observe('kkUpdater', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').updater = $scope[value];
					}
				});
				attrs.$observe('kkHighligher', function (value) {
					if(typeof value === 'string' && typeof $scope[value] !== 'undefined'){
						element.data('typeahead').highlighter = $scope[value];
					}
				});
				element.typeahead();
      }
    };
  });

