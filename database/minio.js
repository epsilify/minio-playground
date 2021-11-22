const { Client } = require('minio');

/** 
 * 
 * @description
 * Access minio by going to the
 * domain https://play.minio.io:9443
 * and use the credentials below for login.
 * 
**/

const minio = new Client({
  endPoint: 'play.minio.io',
  port: 9000,
  useSSL: true,
  accessKey: 'epsilify-minio-playground',
  secretKey: 'df36d70f-c949-42c9-ba12-193f744cbe80'
});

module.exports = minio;
