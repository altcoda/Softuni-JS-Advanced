function sortArr(arr) {
    return arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n')
}
