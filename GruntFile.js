module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    clean: ["dist", ".tmp"],

    copy: {
      main: {
        expand: true,
        cwd: "dev/",
        src: ["**"],
        dest: "dist/",
      },
    },

    useminPrepare: {
      html: "dev/index.html",
    },

    usemin: {
      html: ["dist/index.html"],
    },

    uglify: {
      options: {
        report: "min",
        mangle: false,
        compress: {
          drop_console: true,
          conditionals: true,
          booleans: true,
          sequences: true,
          join_vars: true,
          dead_code: true,
          ie8: true,
        },
      },
    },

    cachebreaker: {
      prod: {
        options: {
          match: ["dist/main/js/main.min.js", "dist/main/main.min.css"],
        },
        files: { src: ["dist/index.html"] },
      },
    },

    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      app: {
        files: {
          "./public/min-safe/mainJS/main-ng.js": ["./JS/app.js"],
        },
      },
    },
    concat: {
      js: {
        // Target
        src: ["./public/min-safe/app.js", "./public/min-safe/mainJS/*.js"],
        dest: "./public/min/app.js",
      },
    },
    uglify: {
      options: {
        mangle: true,
        compress: {
          drop_console: true,
          conditionals: true,
          booleans: true,
          sequences: true,
          join_vars: true,
          dead_code: true,
          ie8: true,
        },
      },
      js: {
        // Target
        src: "./public/min/*.js",
        dest: "./public/minified/all.min.js",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-usemin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-cache-breaker");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify-es");
  grunt.loadNpmTasks("grunt-ng-annotate");

  // Tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask("default", [
    "useminPrepare",
    "copy",
    "concat",
    "uglify",
    "cssmin",
    "usemin",
    "cachebreaker",
    "ngAnnotate",
    "concat",
    "uglify",
  ]);
};
