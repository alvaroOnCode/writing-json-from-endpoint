// Dependencies
import endpoints from './utils/endpoints.js';
import { resetOutputDirectory, writeJSON } from './utils/fs-json-file.js';
import request from './utils/request.js';

/**
 * Config
 */
const output = './output';

/**
 * Init
 */
(async () => {
  // Remove all files in output directory
  const clean = await resetOutputDirectory(output);

  if (!clean.success) return;

  endpoints.forEach(async (endpoint, i) => {
    try {
      // Request data from API
      const raw = await request(endpoint);
      // console.log(`Endpoint #${i + 1} of ${endpoints.length} loaded!`);

      // Write JSON file
      writeJSON(output, endpoint, raw);
    } catch (error) {
      console.error(`#${i} error! | ${error.message}`);
    }
  });
})();