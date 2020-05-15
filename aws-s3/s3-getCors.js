var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

s3 = new AWS.S3({apiVersion: '2006-03-01'});

var bucketParams = {Bucket: process.argv[2]};

s3.getBucketCors(bucketParams, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', JSON.stringify(data.CORSRules));
  }
})
