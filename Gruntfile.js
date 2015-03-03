module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig ({
    clean: {
      all: {
        src: ['public/*', 'src/js/screen.js']
      }
    },
    sprite: {
      all: {
        src: 'src/images/sprite/*.png',
        dest: 'src/images/sprite.png',
        destCss: 'src/styles/sprite.scss',
        cssSpritesheetName: 'scss'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'public/styles/main.css':'src/styles/main.scss'
        }
      }
    }, 
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['src/styles/*.scss'],
        tasks: ['sass']
      },
      js:{
        files: ['src/js/*.js', 'public/js/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, 
            cwd: 'src/js/vendors/',
            src: '*.*',
            dest: 'public/js/vendors/',
            filter: 'isFile'
          },
          { expand: true, 
            cwd: 'src/styles/vendors/css/',
            src: '*.*',
            dest: 'public/styles/vendors/css/',
            filter: 'isFile'
          },
          { expand: true, 
            cwd: 'src/styles/vendors/fonts/',
            src: '*.*',
            dest: 'public/styles/vendors/fonts/',
            filter: 'isFile'
          },
          { expand: true,
            cwd: 'src/js/templates/',
            src: '*.*',
            dest: 'public/js/templates/',
            filter: 'isFile'
          },
          { expand: true,
            cwd: 'src/images/',
            src: '*.*',
            dest: 'public/images/'
          },
          {
            expand: true,
            flatten: true,
            src: ['src/*.html'],
            dest: 'public/',
            filter: 'isFile'
          }
        ]              
      }      
    },
    jshint: {
      files: ['src/js/*.js', 'Gruntfile.js']
    },
    uglify: {
      main: {
        options: {
          semicolons: true,
          compress: false,
          mangle: false,
          beautify: true 
        },
        files: {
          'public/js/screen.js': ['src/js/utils.js', 'src/js/swApp.js', 'src/js/artists4CountryCtrl.js', 'src/js/showBioCtrl.js', 'src/js/topSongsCtrl.js']
        }
      }
    },    
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          hostname: 'localhost',
          base: 'public/'       
        }
      }
    }
  });

  grunt.registerTask ('default', ['clean', 'sprite', 'sass', 'jshint', 'uglify', 'copy', 'watch']);
};
