

/* global module */

module.exports = function (grunt) {


    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        uglify: {
            options: {
                build: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                },
                vendor: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                }
            },
            build: {
                src: 'src/app/build/**/*.js',
                dest: 'dist/app/build/app.js'
            },
            vendor: {
                src: 'src/app/vendor/**/*.js',
                dest: 'dist/app/vendor/vendor.js'

            }
        },
        cssmin: {
            compress: {
                src: 'src/css/**/*.css',
                dest: 'dist/css/style.css'
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: false,
                removeRedundantAttributes: true
            },
            compress: {
                src: 'src/**/*.html',
                dest: 'dist/index.html'
            }
        },
        watch: {
            app: {
                files: "src/app/**/*.js",
                tasks: 'uglify'
            },
            css: {
                files: "src/css/**/*.css",
                tasks: 'cssmin'
            },
            html: {
                files: "src/**/*.html",
                tasks: 'htmlmin'
            }
        }

    });

    grunt.registerTask("default", ['uglify', 'htmlmin', 'cssmin', 'watch']);

};