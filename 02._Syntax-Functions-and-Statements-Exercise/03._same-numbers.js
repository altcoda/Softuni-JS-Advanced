function sameNumbers(int) {
    const arr = [...int.toString()];
    console.log(arr.every(num => Number(num) == arr[0]))
    console.log(arr.reduce((a, b) => Number(a) + Number(b)))
}
