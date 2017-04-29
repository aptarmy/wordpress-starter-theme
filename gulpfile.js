var gulp                = require('gulp'),
	gulp_concat         = require('gulp-concat'),
	gulp_uglify         = require('gulp-uglify'),
	gulp_sourcemaps     = require('gulp-sourcemaps'),
	gulp_sass           = require('gulp-sass'),
	gulp_browserSync    = require('browser-sync').create(),
	gulp_reload         = gulp_browserSync.reload,
	reload_config       = {
		proxy: 'localhost/apt_theme_starter',
		port: 80,
		scss: './sass/**/*.scss',
		php: './**/*.php',
		jsCustomizer: './js/customizer.js',
		js: './js/!(customizer).js',
		jsDist: './dist'
	}

gulp.task('concat-main-scripts', function(){
	gulp.src(reload_config.js)
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_concat('bundled-files.min.js'))
		.pipe(gulp_uglify())
		.pipe(gulp_sourcemaps.write('./'))
		.pipe(gulp.dest(reload_config.jsDist));
});

gulp.task('uglify-customizer-script', function(){
	gulp.src(reload_config.jsCustomizer)
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_concat('customizer.min.js'))
		.pipe(gulp_uglify())
		.pipe(gulp_sourcemaps.write('./'))
		.pipe(gulp.dest(reload_config.jsDist));
});

gulp.task('sass-live-reload', ['sass'], function(){
	gulp_browserSync.init({
		proxy: reload_config.proxy,
		port: reload_config.port
	});
	gulp.watch(reload_config.scss, ['sass']);
	gulp.watch(reload_config.jsDist + '/**/*.js').on('change', gulp_reload);
	gulp.watch(reload_config.php).on('change', gulp_reload);
});

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_sass({outputStyle: 'compressed'}).on('error', gulp_sass.logError))
		.pipe(gulp_sourcemaps.write())
		.pipe(gulp.dest('./'))
		.pipe(gulp_reload({stream: true}));
});

gulp.task('watch-javascript', function(){
	gulp.watch(reload_config.js, ['concat-main-scripts']);
	gulp.watch(reload_config.jsCustomizer, ['uglify-customizer-script']);
});

gulp.task('default', ['concat-main-scripts', 'uglify-customizer-script', 'watch-javascript', 'sass-live-reload']);