module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '0.0.0.0',
                    open: {
                        target: 'http://localhost:3000'
                    },
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/*.js']
            },
            css: {
                files: ['css/*.css'],
                tasks: ['concat_css'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['*.html']
            },
            content: {
                files: ['img/**.*']
            }
        },
        concat_css: {
            index: {
                src: ["css/common.css", "css/home-large.css", "css/home-small.css", "css/buttons.css"],
                dest: "index.css"
            },
            info: {
                src: ["css/common.css", "css/buttons.css", "css/form.css", "css/info-large.css", "css/info-small.css"],
                dest: "info.css"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.registerTask('default', ['concat_css', 'connect', 'watch']);
};
