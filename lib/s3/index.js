const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const postObject = async (name, file) => {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: name,
    Body: file.buffer,
    ContentType: file.mimetype,
  });
  await s3Client.send(command);
};

const getObjectURL = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
};

module.exports = { postObject, getObjectURL };
