'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
        dev: {
          options: {
            sizes: [{
              width: 320,
              name: 'small'
            }, {
              width: 800,
              name: 'large'
            }]
          },
          files: [{
            expand: true,
            src: [
              'images/kanal/**/*.{jpg,gif,png}',
              'images/interior/**/*.{jpg,gif,png}',
              'images/inspiration/**/*.{jpg,gif,png}',
              'images/interior/**/*.{jpg,gif,png}',
              'images/box/**/*.{jpg,gif,png}',
              'images/basement/**/*.{jpg,gif,png}',
              'images/location/**/*.{jpg,gif,png}', 
            ],
            cwd: 'src/',
            dest: 'assets/'
          }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
