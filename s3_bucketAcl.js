var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

s3 = new AWS.S3({apiVersion: '2006-03-01'});

// var bucketParams = {Bucket: process.argv[2]};
// s3.getBucketAcl(bucketParams, (err, data) => {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Success', data.Grants);
//   }
// });

// var bucketParams = {
//   Bucket: process.argv[2],
//   ACL: 'public-read-write'
// }

// s3.putBucketAcl(bucketParams, (err, data) => {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Success', data);
//   }
// })
