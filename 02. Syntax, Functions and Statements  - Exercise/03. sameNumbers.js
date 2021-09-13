function sameNumbers(int) {
    let arr = [...int.toString()];
    console.log(arr.every(num => num == arr[0]))
    console.log(arr.reduce((a, b) => Number(a) + Number(b)))
}
