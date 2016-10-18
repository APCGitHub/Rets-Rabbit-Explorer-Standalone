const elixir = require('laravel-elixir');
const connect = require('gulp-connect');
const templateCache = require('gulp-angular-templatecache');
const minifyHtml = require('gulp-minify-html');
const rm = require('gulp-rm');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const addStream = require('add-stream');

require('laravel-elixir-vue');

require('laravel-elixir-remove');

const config = {
	css: {
		sassPath: './public/scss/styles/',
		sassImportPath: './public/scss/imports/',
		destCss: './public/css',
		bootstrapPath: './bower_components/bootstrap-sass/assets/stylesheets/',
		bootstrapAngularPath: './bower_components/angular-bootstrap/',
		walthroughPath: './bower_components/ng-walkthrough/css/',
		fontawesomePath: './bower_components/font-awesome/scss/'
	},
	js: {
		jqueryPath: './bower_components/jquery/dist/',
		bootstrapPath: './bower_components/bootstrap-sass/assets/javascripts/',
		src: './src/v2/',
		angular: {
			files: [
				'./bower_components/angular/angular.min.js',
				'./bower_components/rets-rabbit-angular/dist/rets-rabbit-angular.min.js',
				'./bower_components/rr-api-explorer/dist/rr-explorer-2.min.js',
				'./bower_components/angular-ui-router/release/angular-ui-router.min.js',
				'./bower_components/ngToast/dist/ngToast.min.js',
				'./bower_components/angular-animate/angular-animate.min.js',
				'./bower_components/angular-scroll/angular-scroll.min.js',
				'./bower_components/angular-sanitize/angular-sanitize.min.js',
				'./bower_components/angular-bootstrap/ui-bootstrap.min.js',
				'./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
				'./bower_components/loaders.css/loaders.css.js',
				'./bower_components/renderjson/renderjson.js',
				'./bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
				'./bower_components/ng-disable-scroll/disable-scroll.min.js'
			],
			dist: './public/js/dist/all-angular.min.js'
		}
	},
	html: {
		src: './templates/v2/**/*.html',
		templateCache: {
			file: 'templates.js',
			options: {
				module: 'app.templates',
				root: 'templates/',
				standAlone: false
			}
		},
		minify: {
			conditionals: true,
			spare: true,
			empty: true
		}
	}
};

/* === ELIXIR STUFFS === */
elixir(function (mix){
    mix.copy('./bower_components/font-awesome/fonts', 'public/fonts');
    mix.copy('./bower_components/bootstrap-sass/assets/fonts', 'public/fonts');

    mix.sass([
            './src/sass/styles.scss'
        ],
        './public/css/build/styles.css')
		.styles([
			'./public/css/build/styles.css',
			'./bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
			'./bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
			'./bower_components/angular-bootstrap/ui-bootstrap-csp.css',
			'./bower_components/loaders.css/loaders.min.css',
			'./bower_components/ngToast/dist/ngToast.css',
			'./bower_components/ngToast/dist/ngToast-animations.min.css',
		], './public/css/app.css');

	// mix.webpack('./src/v1/app.js', './public/js/build/v1.js');
    //
	// mix.scripts([
	// 	'./public/js/build/v1.js'
	// ], './public/js/app.js');
});

//Server with livereload
gulp.task('server', function() {
	connect.server({
		root: [__dirname + '/public'],
		port: 8081,
		livereload: true
	});
});

function prepareTemplates() {
	console.log('Starting template cache.');
	var cache = gulp.src(config.html.src)
		.pipe(minifyHtml(config.html.minify))
		.pipe(templateCache(
			config.html.templateCache.file,
			config.html.templateCache.options
		));
	console.log('Finished template cache');
	return cache;
}

gulp.task('templateCache', function () {
	return gulp.src(config.html.src)
		.pipe(minifyHtml(config.html.minify))
		.pipe(templateCache(
			config.html.templateCache.file,
			config.html.templateCache.options
		))
		.pipe(connect.reload());
});

gulp.task('clean:dist', function() {
	return gulp.src('public/js/dist', {
		read: false
	})
		.pipe(rm());
});

//Compile all angular sources to be used in the js compilation tasks
gulp.task('angular', function() {
	return gulp.src(config.js.angular.files)
		.pipe(plumber())
		.pipe(concat('all-angular.min.js'))
		.pipe(gulp.dest('./public/js/dist'));
});

gulp.task('js-dev', ['clean:dist', 'angular'], function() {
	return gulp.src([
			config.js.jqueryPath + 'jquery.min.js',
			config.js.bootstrapPath + 'bootstrap.min.js',
			'./bower_components/rets-rabbit-js/dist/rets_rabbit.umd.min.js',
			config.js.angular.dist,
			'./src/js/**/*.js'
		])
		.pipe(plumber())
		.pipe(addStream.obj(prepareTemplates()))
		.pipe(concat('explore.js'))
		.pipe(gulp.dest('./public/js/'))
		.pipe(connect.reload());
});

gulp.task('js-prod', ['clean:dist', 'angular'], function() {
	return gulp.src([
			config.js.jqueryPath + 'jquery.min.js',
			config.js.bootstrapPath + 'bootstrap.min.js',
			'./bower_components/rets-rabbit-js/dist/rets_rabbit.umd.min.js',
			config.js.angular.dist,
			'./src/js/**/*.js'
		])
		.pipe(plumber())
		.pipe(addStream.obj(prepareTemplates()))
		.pipe(concat('explore.min.js'))
		.pipe(gulp.dest('./public/js/'))
		.pipe(connect.reload());
});