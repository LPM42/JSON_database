module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    express: {
      options: {
        port: 3000,
        background: false
      },
      dev: {
        options: {
          script: './server.js'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'server.js', 'routes/**/*.js']
    },
    watch: {
      scripts: {
        files: ['**.*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      }
    }
  });
  grunt.registerTask('default', ['jshint','express:dev', 'watch']);
};
