let currentPrediction = 0;

async function predict(): Promise<number> {
  // wait 500 ms
  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });

  currentPrediction += 1;
  return currentPrediction;
}


async function makePrediction() {
  const startTime = Date.now();
  const prediction = await predict();
  console.log(`Got prediction ${prediction}\t(took ${Date.now() - startTime} ms)`);
}

// Make 4 predictions at once
makePrediction();
makePrediction();
makePrediction();
makePrediction();
