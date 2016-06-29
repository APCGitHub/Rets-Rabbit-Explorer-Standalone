(function () {
	'use strict';
	angular.module('app', [
		'ui.bootstrap',
		'ngDisableScroll',
		'ng-walkthrough',
		'duScroll',
	  	'rr.api.v2.explorer',
		'ui.router',
	 	'app.templates',
	 	'app.config',
	 	'app.run',
	 	'app.constants',
	 	'app.controllers',
	 	'app.factories',
	  	'app.services'
	]);
})();
