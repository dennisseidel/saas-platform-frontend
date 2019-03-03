"use strict";
const aws = require("@pulumi/aws");
const pulumi = require("@pulumi/pulumi");
const mime = require("mime");
const fs = require("fs");
const AWS = require('aws-sdk');
const glob = require('glob');
const zip = require('adm-zip');


aws.config.region = "eu-central-1"

let siteDir = "../../frontend/build"; // directory for content files
let dirs = glob.sync(siteDir + '/**/*', { nodir: true });

// Create an S3 bucket for platform frontend
let deployBucket = new aws.s3.Bucket("saas-platform-frontend-deployment", {
  versioning: {
    enabled: true,
  },
});

// var archieve = new zip();
// archieve.addLocalFolder(siteDir);
// archieve.writeZip('./frontend.zip');

// let deploymentObject = new aws.s3.BucketObject('frontend', {
//   bucket: deployBucket,
//   source: new pulumi.asset.FileAsset('./frontend.zip'),
// });


// Create an S3 bucket for platform frontend
let siteBucket = new aws.s3.Bucket("saas-platform-frontend", {
  website: {
    errorDocument: "index.html",
    indexDocument: "index.html",
  },
});

// For each file in the directory, create an S3 object stored in `siteBucket`
for (let i in dirs) {
  const dirPath = dirs[i];
  const fileName = dirPath.substring(dirPath.lastIndexOf("/") +1);
  const relativePath = dirPath.substring(dirPath.lastIndexOf("build")+6);
  let object = new aws.s3.BucketObject(fileName, { 
    bucket: siteBucket,
    key: relativePath,
    source: new pulumi.asset.FileAsset(dirPath),     // use FileAsset to point to a file
    contentType: mime.getType(dirPath) || undefined, // set the MIME type of the file
  });
}


function publicReadPolicyForBucket(bucketName) {   
  return JSON.stringify({
    Version: "2012-10-17",
    Statement: [{
      Effect: "Allow",
      Principal: "*",
      Action: [
          "s3:GetObject"
      ],
      Resource: [
          `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
      ]
    }]
  })
}

// Set the access policy for the bucket so all objects are readable
let bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {   
  bucket: siteBucket.bucket, // depends on siteBucket -- see explanation below
  policy: siteBucket.bucket.apply(publicReadPolicyForBucket) 
          // transform the siteBucket.bucket output property -- see explanation below
});


// identity provider
const userPool = new aws.cognito.UserPool("saas-template-users", {
  autoVerifiedAttributes: ["email"],
});

const clientFrontend = new aws.cognito.UserPoolClient("client", {
  userPoolId: userPool.id,
});

console.log(pulumi.Config.name);

exports.websiteUrl = siteBucket.websiteEndpoint; // output the endpoint as a stack output
exports.userPoolWebClientId = clientFrontend.id;
exports.userPoolId = userPool.id;
exports.region = aws.config.region;