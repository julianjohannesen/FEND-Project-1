/*

  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [
              {
                width: 1600,
                suffix: "_large_2x",
                quality: 30 
              },
              {
                width: 800,
                suffix: "_large_1x",
                quality: 30
              },
              {
                width: 800,
                suffix: "_med_2x",
                quality: 30
              },
              {
                width: 400,
                suffix: "_med_1x",
                quality: 30
              },
            ]
          },
  
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'src/img',
            dest: 'img/'
          }]
        }
      },
  
      /* Clear out the images directory if it exists */
      clean: {
        dev: {
          src: ['img'],
        },
      },
  
      /* Generate the images directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ['img']
          },
        },
      },
  
      /* Copy the "fixed" images that don't go through processing into the images/directory */
      copy: {
        dev: {
          files: [{
            expand: true,
            src: 'images_src/fixed/*.{gif,jpg,png}',
            dest: 'img/'
          }]
        },
      },
    });
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  
  };
  