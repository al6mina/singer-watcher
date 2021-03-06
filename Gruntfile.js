module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
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
                    'public/styles/main.css': 'src/styles/main.scss'
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
            js: {
                files: ['src/js/*.js', 'public/js/*.js'],
                tasks: ['jshint', 'uglify']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/js/vendors/',
                        src: '*.*',
                        dest: 'public/js/vendors/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/styles/vendors/css/',
                        src: '*.*',
                        dest: 'public/styles/vendors/css/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/styles/vendors/fonts/',
                        src: '*.*',
                        dest: 'public/styles/vendors/fonts/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/js/templates/',
                        src: '*.*',
                        dest: 'public/js/templates/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
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
                    mangle: false
                },
                files: {
                    'public/js/screen.js': ['src/js/config.js', 'src/js/utils.js', 'src/js/app.js', 'src/js/themesCtrl.js', 'src/js/artistsListCtrl.js',
                        'src/js/showBioCtrl.js', 'src/js/topSongsCtrl.js', 'src/js/similarCtrl.js',  'src/js/searchCtrl.js',
                        'src/js/favouriteListCtrl.js', 'src/js/languageCtrl.js'],
                    'public/js/vendors/frameworks.js':['bower_components/jquery/dist/jquery.js', 'bower_components/angular/angular.js', 'bower_components/angular-translate/angular-translate.js',
                        'bower_components/angular-cookies/angular-cookies.js', 'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
                        'bower_components/angular-animate/angular-animate.js', 'bower_components/angular-ui-router/release/angular-ui-router.js'
                    ]
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
    grunt.registerTask('default', ['clean', 'sprite', 'sass', 'jshint', 'uglify', 'copy', 'watch']);
};


