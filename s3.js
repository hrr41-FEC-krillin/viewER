var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

s3 = new AWS.S3({apiVersion:'2006-03-01'});

/*
// calls S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.Buckets);
  }
});

*/

/*
// create an S3 bucket
var bucketParams = {
  Bucket: process.argv[2],
  ACL: 'public-read'
};

s3.createBucket(bucketParams, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.Location);
  }
});
// excute in command line: node s3_listbuckets.js BUCKET_NAME
// Note: (this BUCKET_NAME is the the process.argv[2])
*/

var uploadParams = {Bucket: process.argv[2], Key: '', Body: '', ACL: 'public-read'};
var file = process.argv[3];

var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', (err) => {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;

var path = require('path');
uploadParams.Key = path.basename(file);

s3.upload (uploadParams, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Upload Success', data.Location);
  }
})
// excute in command line: node s3_listbuckets.js BUCKET_NAME FILE_PATH
