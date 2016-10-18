(function () {
	'use strict';
	angular.module('app', [
		'ui.router',
		'ui.bootstrap',
		'ngDisableScroll',
		'ngSanitize',
		'ngToast',
		//'ngDisableScroll',
		//'ng-walkthrough',
		'duScroll',
	  	'rr.api.v2.explorer',
	 	'app.templates',
	 	'app.config',
	 	'app.run',
	 	'app.constants',
	 	'app.controllers',
	 	'app.factories',
	  	'app.services',
		'app.filters'
	]);
})();
