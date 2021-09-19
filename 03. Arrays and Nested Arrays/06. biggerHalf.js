function biggerHalf(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const newArr = sorted.splice(Math.ceil((sorted.length - 1) / 2));
    return newArr;
}
