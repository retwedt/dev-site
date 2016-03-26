/*

	Source Maps
	===========
	
	The final production ready files built via gulp are compressed and hard to
	read as is.  Source maps allows us to map from a compressed file back to its
	original, more readable form.  Chrome & Firefox support source maps. 

	Source map tutorial: http://blog.teamtreehouse.com/introduction-source-maps

	Globs
	=====

	gulp uses node-glob for parsing file paths.  This allows for wildcards and
	the like in the file paths, e.g. "js/*.js" will match any files with a .js
	extension in the js/ folder.

	More info: https://github.com/isaacs/node-glob

	livereload
	==========

	livereload allows us to trigger a refresh in the browser any time a file is
	changed.  We start up a livereload server from the node side which then
	communicates with a browser extension (http://livereload.com/extensions/).
	When a change is made to a watched file, pipe the changes to livereload so
	that it can notify the browser extension as to what has changed.

	livereload gulp tutorial: https://www.youtube.com/watch?v=r5fvdIa0ETk

*/

// _____________________________________________________________________________
// Setup

// Gulp & gulp plugins
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var liveReload = require("gulp-livereload");
var merge = require("merge-stream");
var open = require('gulp-open');
var uglify = require("gulp-uglify");
var newer = require("gulp-newer");
var deploy = require('gulp-deploy-git');


// Other modules
var express = require("express");
var path = require("path");
var fs = require("fs");


// _____________________________________________________________________________
// Build Tasks

// Copy html to public folder
gulp.task("html", function() {
	return gulp.src("source/html/**/*.*")
		.pipe(newer("public"))
		.pipe(gulp.dest("public"))
		.pipe(liveReload());
});

// Copy images to the public folder
gulp.task("images", function () {
	var img = gulp.src("source/img/**/*.*")
		.pipe(newer("public/img"))
		.pipe(gulp.dest("public/img"));
	// Images for Fancybox lightbox
	var fancyPng = gulp.src("bower_components/fancyBox/source/*.png")
		.pipe(gulp.dest("public/css/fancybox"));
	var fancyGif = gulp.src("bower_components/fancyBox/source/*.gif")
		.pipe(gulp.dest("public/css/fancybox"));
	return merge(img, fancyPng, fancyGif);
});


// Copy fancybox vendor css to public folder
gulp.task("vendor-css", function() {
	return fancyCss = gulp.src("bower_components/fancyBox/source/jquery.fancybox.css")
		.pipe(gulp.dest("public/css/fancybox"));
});


// Convert from sass to css adding vendor prefixes along the way and generating
// a source map to allow for easier debugging in chrome.
gulp.task("sass", function () {
	// Configure a sass stream so that it logs errors properly
	var sassStream = sass({
		outputStyle: "expanded",
		includePaths: [
			"bower_components/bootstrap-sass/assets/stylesheets",
		]
	});
	sassStream.on("error", sass.logError);

	return gulp.src("source/scss/**/*.scss")
		.pipe(sourcemaps.init())
			.pipe(sassStream)
			.pipe(autoprefixer({
				browsers: [
					// https://github.com/twbs/bootstrap-sass#sass-autoprefixer
					"Android 2.3",
					"Android >= 4",
					"Chrome >= 20",
					"Firefox >= 24",
					"Explorer >= 8",
					"iOS >= 6",
					"Opera >= 12",
					"Safari >= 6"
				],
				cascade: true
			}))
		.pipe(sourcemaps.write("maps"))
		.pipe(gulp.dest("public/css"))
		.pipe(liveReload());
});

// Copy bootstrap and jquery vendor libraries files into public/js folder
gulp.task("vendor-js", function() {
	var jquery = gulp.src("bower_components/jquery/dist/jquery.min.js")
		.pipe(gulp.dest("public/js"));
	var bootstrap = gulp.src("bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js")
		.pipe(gulp.dest("public/js"));
	var dropdownHover = gulp.src("bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js")
		.pipe(gulp.dest("public/js"));
	var fancyBox = gulp.src("bower_components/fancyBox/source/jquery.fancybox.js")
		.pipe(gulp.dest("public/js"));
	var mousewheel = gulp.src("bower_components/fancyBox/lib/jquery.mousewheel-3.0.6.pack.js")
		.pipe(gulp.dest("public/js"));
	var fancyBoxMedia = gulp.src("bower_components/fancyBox/source/helpers/jquery.fancybox-media.js")
		.pipe(gulp.dest("public/js"));
	var bootstrapValidator = gulp.src("bower_components/bootstrap-validator/dist/validator.min.js")
		.pipe(gulp.dest("public/js"));
	return merge(jquery, bootstrap, dropdownHover, fancyBox, fancyBoxMedia, bootstrapValidator);
});

// Uglify and sourcemap custom JS for the project into public/js/all.js
gulp.task("js", function() {
	return gulp.src("source/js/**/*.js")
		.pipe(sourcemaps.init())
			.pipe(uglify())
		.pipe(sourcemaps.write("maps"))
		.pipe(gulp.dest("public/js"))
		.pipe(liveReload());
});

// Copy hosting files to public folder
gulp.task("hosting", function() {
	return hosting = gulp.src("source/hosting/*")
		.pipe(gulp.dest("public"));
});


gulp.task("build", [
	"html",
	"images",
	"vendor-css",
	"sass",
	"vendor-js",
	"js",
	"hosting"
]);


// _____________________________________________________________________________
// Running Tasks

// Watch for changes to HTML/SASS files and start a liveReload server
gulp.task("watch", function () {
	liveReload.listen();
	gulp.watch("source/html/**/*.html", ["html"]);
	gulp.watch("source/js/**/*.js", ["js"]);
	gulp.watch("source/scss/**/*.scss", ["sass"]);
});

// Start an express server that serves public/ to localhost:8080
gulp.task("express-server", function () {
	var app = express();
	app.use(express.static(path.join(__dirname, "public")));
	app.listen(8080);
});

gulp.task("open", function() {
	return gulp.src(__filename)
		.pipe(open({ uri: "http://127.0.0.1:8080" }));
});

gulp.task("run", [
	"watch",
	"express-server",
	"open"
]);


// _____________________________________________________________________________
// Deploying Tasks

// Default task is run when "gulp" is run from terminal
gulp.task("default", [
	"build",
	"run"
]);


// Deploy "public" folder to retwedt.github.io repository
gulp.task('deploy', function() {
  return gulp.src('public/**/*', { read: false })
    .pipe(deploy({
      repository: 'https://github.com/retwedt/retwedt.github.io.git',
      branches:   ['master'],
      prefix: 'public' // remove public prefix to put contents directly into repository
    }));
});
