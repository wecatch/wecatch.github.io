module.exports = function(grunt) {

    var path = require('path');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %>' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage %>\n' + '* Copyright (c) <%= grunt.template.today("yyyy") %> wecatch: <%= pkg.author %> */\n'
        },
        uglify: {
            options: {
                compress: true
            }
        },
        less: {
            production: {
                options: {
                    paths: ["css/css"],
                    yuicompress: true
                },
                files: {
                    "../css/app.css": "css/app.less"
                }
            }
        },
        watch: {
            css: {
                files: 'css/**/*.less',
                tasks: ['less'],
                options: {
                    event: ['changed']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);

}
