function previousDay(y, m, d) {
    let date = new Date(y, m - 1, d);
    date.setDate(date.getDate() - 1)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
