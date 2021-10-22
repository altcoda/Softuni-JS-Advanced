function sumArr(arr,start,end) {
    
    // the solution asks to return NaN if there is any error
    if(Array.isArray(arr) === false) { return NaN }

    start = Math.max(0, start);
    end = Math.min(arr.length - 1, end + 1);
    
    return arr.slice(start, end)
        .reduce((acc, num) => acc += Number(num), 0);
}
