function aggregateElements(...els) {
    const operations = {
      sum: (els) => {
        const total = els.reduce((a, b) => Number(a) + Number(b));
        console.log(total)
      },
      sumInverseValues: (els) => {
        let total = 0;
        for (let i = 0; i < els.length; i++) {
          total += 1 / els[i];
        }
        console.log(total)
      },
      concat: (els) => {
        const joined = els.reduce((a, b) => (a + '') + (b + ''));
        console.log(joined)
      }
    }
  
    for (let fn in operations) {
      operations[fn](...els)
    }
}
