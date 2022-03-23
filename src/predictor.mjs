import { log } from './logger.mjs';

let currentPrediction = 0;

export async function predict(id) {
  log(`Actually predicting for: ${id}`)

  // wait 500 ms
  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });

  currentPrediction += 1;
  return currentPrediction;
}
