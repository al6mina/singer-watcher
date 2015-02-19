module.exports = function(grunt) {
    grunt.initConfig({
        clean:{
            all:{
               src: ['public/*']
            }
        },
        sass: {
            dist: {
                  files: {
                    'src/scss/screen.css': 'src/scss/screen.scss',
                    }
            },
            
            min :{
                files:{
                    'public/css/screen.min.css':['src/scss/screen.css']
                }
            }
        },            
        watch:{
            options:{
                livereload:true
            },
            sass:{
                files:['src/scss/*.scss'],
                tasks :['sass']
            }
        },
        copy: {
              main: {
                files:[
                    { expand: true, 
                        cwd: 'src/js/vendors/',
                        src:'*.*',
                        dest: 'public/js/vendors/',
                        filter: 'isFile'
                    },
                    {
                    expand: true,
                    cwd: 'src/templates/',
                    src:'*.*',
                    dest: 'public/templates/',
                    filter: 'isFile'      
                    },
                    {
                        expand: true, flatten: true, src: ['src/*.html'], dest: 'public/', filter: 'isFile'
                    },
                ],               
             },       
        },
        concat: {
            dist: {
              src: ['src/js/*.js'],
              dest: 'src/js/output.js'
            },
            min:{
                files:{
                    'public/js/output.min.js':['src/js/main.min.js']
                }
            }
        },
       jshint: {
            files: ['src/js/*.js'],
            
         },

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean','copy', 'sass', 'jshint','concat','watch']);
};