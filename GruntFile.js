module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //grunt task configuration will go here
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          './public/min-safe/mainJS/app.js': ['./JS/app.js']
        }
      }
    },
    concat: {
      js: { //target
        src: ['./public/min-safe/app.js', './public/min-safe/mainJS/*.js'],
        dest: './public/min/app.js'
      }
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
          ie8: true
        },
      },
      js: { //target
        src: './public/min/*.js',
        dest: './JS/minified/alljs.min.js'
      }
    }
  });

  //load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');

  //register grunt default task
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
}