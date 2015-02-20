module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.initConfig({
        clean: {
            all:{
               src: ['public/*']
            }
        },
        sprite:{
             all: {
                src: 'src/images/png/*.png',
                dest: 'src/images/spritesheet.png',
                destCss: 'src/images/sprites.css'
          }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files : {
                    'src/styles/main.css':'src/styles/main.scss'
                }
            }
        },         
        watch:{
            options:{
                livereload:true
            },
            sass:{
                files:['src/styles/*.scss'],
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
                        cwd: 'src/styles/vendors/css/',
                        src: '*.*',
                        dest: 'public/styles/vendors/css/',
                        filter: 'isFile'
                        
                    },
                    {   expand: true, 
                        cwd: 'src/styles/vendors/fonts/',
                        src: '*.*',
                        dest: 'public/styles/vendors/fonts/',
                        filter: 'isFile'
                        
                    },
                    {   expand: true,
                        cwd: 'src/templates/',
                        src:'*.*',
                        dest: 'public/templates/',
                        filter: 'isFile'      
                    },
                     {  expand: true,
                        cwd: 'src/images/',
                        src:'*.*',
                        dest: 'public/images/',
                        filter: 'isFile'      
                    },
                    {
                        expand: true, flatten: true, src: ['src/*.html'], dest: 'public/', filter: 'isFile'
                    },
                     {
                        expand: true, flatten: true, src: ['src/styles/main.css'], dest: 'public/styles/', filter: 'isFile'
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

    

    grunt.registerTask('default', ['clean', 'sprite', 'sass', 'jshint','concat','uglify','copy','watch']);
};