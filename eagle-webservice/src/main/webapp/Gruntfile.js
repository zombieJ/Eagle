/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
'use strict';

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: grunt.file.readJSON('grunt.json'),

		clean: {
			build: ['dist/', 'tmp/'],
			tmp: ['tmp/'],
			dist: ['dist/'],
		},
		concat: {
			//app: {
			//	src: [
			//		'tmp/js/templates.js',
			//		'app/js/**/*.js'
			//	],
			//	dest: 'tmp/js/scripts.js'
			//},
			js: '<%= config.concat.js %>',
			css: '<%= config.concat.css %>'
		},
		uglify: {
			dist: {
				src: 'tmp/public/js/scripts.js',
				dest: 'tmp/public/js/scripts.min.js'
			}
		},
		cssmin: {
			dist: {
				files: {
					'tmp/public/css/styles.min.css': ['tmp/public/css/styles.css']
				}
			}
		},
		htmlrefs: {
			dist: {
				src: 'index.html',
				dest: "tmp/index.html",
			}
		},
		copy: {
			dist: {
				files: [
					{expand: true, cwd: 'tmp/', src: ['**'], dest: 'dist'},
					{expand: true, src: ['public/images/**', 'partials/**'], dest: 'dist'},
					{expand: true, cwd: 'node_modules/font-awesome/', src: ['fonts/**'], dest: 'dist/public'},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-htmlrefs');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//grunt.registerTask('default', ['clean:build','concat', 'uglify', 'cssmin', 'htmlrefs', 'copy', 'clean:tmp']);
	//grunt.registerTask('default', ['clean:build','concat', 'uglify', 'cssmin', 'htmlrefs', 'copy']);
	grunt.registerTask('default', ['clean:dist', 'copy']);
};