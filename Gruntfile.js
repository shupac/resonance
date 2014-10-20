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
                files: ['css/*.css']
            },
            html: {
                files: ['*.html']
            },
            content: {
                files: ['img/**.*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['connect', 'watch']);
};
