// Packages
import https from 'https';

const request = ({ hostname, path }) => {
  if (!path) return 0;

  const options = {
    hostname,
    port: 443,
    path,
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    // Data
    const chunks = [];

    // Creating request
    const req = https.request(options, (res) => {
      // console.log(`Response | ${res.statusCode} | ${res.statusMessage}`);

      // Getting content
      res.on('data', (chunk) => {
        chunks.push(chunk);
      });

      res.on('end', () => {
        const data = Buffer.concat(chunks);

        resolve({
          success: true,
          message: '✅ Complete JSON received!',
          data,
        });
      });
    });

    // On event error
    req.on('error', (error) => {
      console.error('💥 Request | error |', error.message);
      reject(error.message);
    });

    // Sending request
    req.end();
  });
};

export default request;
