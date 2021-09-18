function processOddPositions(nums) {
    return nums.map((n, i) => i % 2 === 1 ? n * 2 : undefined)
      .reverse()
      .join()
}
