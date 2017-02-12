module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['script/src/*.js'],
                dest: 'script/dest/script.min.js'
            }
        },
        uglify: {
            dist: {
                src: ['script/dest/script.min.js'],
                dest: 'script/dest/script.min.js'
            }
        },
        cssmin: {
            css:{
                src: 'stylesheet/style.css',
                dest: 'stylesheet/style.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['script/*.js'],
                tasks: ['concat', 'uglify']
            },
            css: {
                files: ['stylesheet/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};