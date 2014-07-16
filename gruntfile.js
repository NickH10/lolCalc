module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    // connect: {
    //   dev: {
    //     options: {
    //       port: 8000,
    //       hostname: 'localhost',
    //       keepalive: true
    //     },
    //     livereload: {
    //       options: {
    //         port: 8000,
    //         hostname: 'localhost',
    //         middleware: function (connect) {
    //           return [
    //             function(req, res, next) {
    //               res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:8000');
    //               res.setHeader('Access-Control-Allow-Methods', 'http://0.0.0.0:8000');
    //               next();
    //             },
    //           ];
    //         }
    //       }
    //     }
    //   }
    // },
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

    // open: {
    //   dev: {
    //     path: 'http://localhost:8999'
    //   }
    // },

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
    }     
    // watch: {
    // html: {
    //     files: ['index.html'],
    //     tasks: ['htmlhint']
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('server', ['connect:dev']);
  grunt.registerTask('server', ['connect:dev', 'watch']);

  // A very basic default task.
  // grunt.registerTask('default', 'Log some stuff.', function() {
  //   grunt.log.write('Logging some stuff...').ok();
  // });

};