require('dotenv').config();
const path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      myConfig: {
        mode: 'production',
        entry: './client/index.jsx',
        output: {
          filename: 'bundle.js',
          path: path.join(__dirname, 'public')
        },
        module: {
          rules: [
            {
              test: /\.(jsx|js)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            }
          ]
        }
      }
    },
    aws_s3: {
      options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-2',
        bucket: 'castphoto-sdk',
        access: 'public-read',
        stream: true,
      },
      upload: {
        files: [
        {expand: true, cwd: 'public', src:['bundle.js'], dest: '/'}
        ]
      }
    },
    watch: {
      bundleJS: {
        files: 'client/**/*',
        tasks: ['webpack', 'aws_s3']
      }
    }

  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['webpack', 'aws_s3', 'watch']);
}
