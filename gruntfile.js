module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      dev: {
        options: {
          port: 8999,
          livereload: 35729,
          hostname: 'localhost'
        },
        livereload: {
          options: {
            open: { target: 'http://localhost:8999' },
            base: ['.'],
                      middleware: function (connect) {
            return [
              function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:8999');
                res.setHeader('Access-Control-Allow-Methods', 'http://0.0.0.0:8999');
                next();
              },
            ];
          }
          }
        }
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      livereload: {
        options: {
          livereload: 35729,
                    middleware: function (connect) {
            return [
              function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:8999');
                res.setHeader('Access-Control-Allow-Methods', 'http://0.0.0.0:8999');
                next();
              },
            ];
          }
        },
        files: [
          'src/main/*.js',
          'src/main/*.html'
        ]
      }
    },
    // sass: {
    //   dist: {
    //     files: {
    //       'style/style.css' : 'sass/style.scss'
    //     }
    //   }
    // },
    // watch: {
    //   css: {
    //     files: '**/*.scss',
    //     tasks: ['sass']
    //   }
    // }   
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  // grunt.registerTask('server', ['connect:dev']);
  grunt.registerTask('server', ['connect:dev', 'watch']);

  // A very basic default task.
  // grunt.registerTask('default', 'Log some stuff.', function() {
  //   grunt.log.write('Logging some stuff...').ok();
  // });

};