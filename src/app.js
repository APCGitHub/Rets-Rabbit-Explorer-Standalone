(function () {
	'use strict';
	angular.module('app', [
		'rets-rabbit-angular',
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