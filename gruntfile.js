module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      dev: {
        options: {
          port: 8000,
          keepalive: true,
          // livereload: 35729,
          hostname: 'localhost'
        },
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      livereload: {
        // options: {
        //   livereload: 35729,
        // },
        files: [
          '*.js',
          '*.html',
          '*.scss'
          // 'src/main/*.js',
          // 'src/main/*.html'
        ]
      }
    },
    //  sass --watch sass:.
    // sass: {
    //   dist: {
    //     files: {
    //       'style/css/sass' : 'style/css'
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
  grunt.registerTask('server', ['connect:dev']);

  // A very basic default task.
  // grunt.registerTask('default', 'Log some stuff.', function() {
  //   grunt.log.write('Logging some stuff...').ok();
  // });

};