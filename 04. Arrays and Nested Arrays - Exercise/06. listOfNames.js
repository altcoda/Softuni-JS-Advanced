function listOfNames(arr) {
    const sorted = arr.sort((a, b) => a.localeCompare(b));
    sorted.forEach((name, index) => console.log(`${index + 1}.${name}`))
}
