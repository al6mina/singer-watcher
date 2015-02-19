module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

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
            },
            js:{
                files:['src/js/*.js'],
                tasks:['jshint','uglify']
            }
        },
        copy: {
              main: {
                files:[
                    {   expand: true, 
                        cwd: 'src/js/vendors/',
                        src:'*.*',
                        dest: 'public/js/vendors/',
                        filter: 'isFile'
                    },
                    {   expand: true, 
                        cwd: 'src/scss/vendors/',
                        src:'*.*',
                        dest: 'public/css/vendors/',
                        filter: 'isFile'
                    },
                    {   expand: true,
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
              src: ['src/js/utils.js', 'src/js/f1.js','src/js/f2.js'],
              dest: 'src/js/screen.js'
            },
            
        },
       jshint: {
            files: ['src/js/*.js'],
            
         },
         uglify:{
            main:{
                files:{
                    'public/js/screen.min.js':['src/js/screen.js']
                }
            }
         }

    });

    

    grunt.registerTask('default', ['clean','copy', 'sass', 'jshint','concat','uglify','watch']);
};