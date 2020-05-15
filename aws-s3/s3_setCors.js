var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

s3 = new AWS.S3({apiVersion: '2006-03-01'});

var thisConfig = {
  AllowedHeaders: ['Authorization'],
  AllowedMethods: [],
  AllowedOrigins: ['*'],
  ExposeHeaders: [],
  MaxAgeSeconds: 3000
};

var allowedMethods = [];

process.argv.forEach((val, index, array) => {
  if (val.toUpperCase() === 'POST') {allowedMethods.push('POST')};
  if (val.toUpperCase() === 'GET') { allowedMethods.push('GET') };
  if (val.toUpperCase() === 'PUT') { allowedMethods.push('PUT') };
  if (val.toUpperCase() === 'PATCH') { allowedMethods.push('PATCH') };
  if (val.toUpperCase() === 'DELETE') { allowedMethods.push('DELETE') };
  if (val.toUpperCase() === 'HEAD') { allowedMethods.push('HEAD') };
});

thisConfig.AllowedMethods = allowedMethods;

var corsRules = new Array(thisConfig);

var corsParams = {Bucket: process.argv[2], CORSConfiguration: {CORSRules: corsRules}};

s3.putBucketCors(corsParams, (err, data) => {
  if (err) {
    cosnole.log('Error', err);
  } else {
    console.log('Success', data);
  }
})
