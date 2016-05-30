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
              'images/IDEA/**/*.{jpg,gif,png}'

            ],
            cwd: 'dist/',
            dest: 'dest/'
          }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
