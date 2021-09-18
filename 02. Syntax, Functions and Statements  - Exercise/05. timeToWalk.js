function timeToWalk(steps, stepLengthM, speedKMH) {
    steps = Number(steps);
    stepLengthM = Number(stepLengthM);
    speedKMH = Number(speedKMH);
  
    const distanceM = steps * stepLengthM;
    const speedSec = speedKMH / 3.6;
    const rest = Math.floor(distanceM / 500) * 60;
    const timeS = distanceM / speedSec + rest;
  
    const h = Math.floor(timeS / 3600);
    const m = Math.floor(timeS / 60);
    const s = Math.round(timeS - (m * 60));
  
    const format = (n) => n.toString().padStart(2, '0');
  
    return (`${format(h)}:${format(m)}:${format(s)}`)
}

