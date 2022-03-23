import limit from 'p-limit';
import { log } from './logger.mjs';
import { predict } from './predictor.mjs';

const oneAtATime = limit(1);

async function requestPrediction(id) {
  // Start timing
  const startTime = new Date();

  // Log that we started
  log(`Requesting prediction for ${id}`);

  // Wait for queue & prediction (passing args on to getPrediction(…))
  const prediction = await oneAtATime(() => predict(id));

  // Log some info
  log(`Got prediction ${prediction}\t(waited ${Date.now() - startTime} ms in total)`);

  return prediction;
}

// Make 4 predictions at once
requestPrediction('liam');
requestPrediction('omri');
requestPrediction('martin');
requestPrediction('ryan');
