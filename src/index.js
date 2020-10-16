// Dependencies
import endpoints from './utils/endpoints.js';
import { resetOutputDirectory, writeJSON } from './utils/fs-json-file.js';
import request from './utils/request.js';

/**
 * Config
 */
const config = {
  output: {
    clearOnInit: false,
    dir: './output',
  },
};

/**
 * Init
 */
(async () => {
  if (config.output.clearOnInit) {
    try {
      // Remove all files in output directory
      const { success, message } = await resetOutputDirectory(config.output.dir);

      if (!success) {
        console.error(message);
        return;
      }

      console.log(message);
    } catch (error) {
      console.error(`💥 Cleaning output directory failed! | ${error.message}`);
    }
  }

  endpoints.forEach(async (endpoint, i) => {
    try {
      // Request data from API
      const req = await request(endpoint);

      if (!req.success) {
        console.error(req.message);
        return;
      }

      // Write JSON file
      const { success, message } = await writeJSON(config.output.dir, endpoint, req.data);

      if (!success) {
        console.error(message);
        return;
      }

      console.log(message);
    } catch (error) {
      console.error(`💥 Endpoint #${i} failed! | ${error.message}`);
    }
  });
})();
