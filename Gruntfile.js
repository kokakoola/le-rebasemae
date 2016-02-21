'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      dev: {

        files: [{
          expand: true,
          src: ['images/inspiration/*.{jpg,gif,png}'],
          cwd: 'assets/',
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};