const startTime = Date.now();
let previousTime;

function padStart(n, maxLength, fillString) {
  return n.toString().padStart(maxLength, fillString);
}

function padEnd(n, maxLength, fillString) {
  return n.toString().padEnd(maxLength, fillString);
}

export function log(...args) {
  const now = new Date();
  const msSinceStart =  padStart(now - startTime, 4, ' ');
  const msSincePrevious = padStart(previousTime == null ? 0 : now - previousTime, 4, ' ');

  const hours = padStart(now.getHours(), 2, '0')
  const minutes = padStart(now.getMinutes(), 2, '0');
  const seconds = padStart(now.getSeconds(), 2, '0');
  const millis = padEnd(now.getMilliseconds(), 3, '0');

  const timestamp = `${hours}:${minutes}:${seconds}.${millis} (start + ${msSinceStart} ms | last + ${msSincePrevious} ms)`;

  console.log(timestamp, '-', ...args)

  previousTime = now.getTime();
}
