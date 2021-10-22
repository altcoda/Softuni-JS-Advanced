function strLength(...strings) {
    let totalLength = strings
      .reduce((a,b) => a + b)
      .length;
    let avgLength = Math.floor(totalLength / strings.length);

    console.log(totalLength)
    console.log(avgLength)
}
