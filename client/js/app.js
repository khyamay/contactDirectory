angular.module('myApp', ['ngTouch', 'ngRoute', 'ngAnimate', 'myApp.controllers', 'myApp.memoryServices'])
	.config(['$routeProvider', function ($routeProvider){
		$routeProvider.when('/employees', {
			templateUrl: 'partials/employee-list.html',
			controller: 'EmployeeListCtrl'
		}).when('/employees/:employeeId', {
			templateUrl: 'partials/employee-details.html', 
			controller: 'EmployeeDetailCtrl'
		}).when('/employees/:employeedId/reports', {
			templateUrl: 'partials/report-list.html',
			controller:'ReportListCtrl'
		}).otherwise({redirectTo: '/employees'});
	}]);