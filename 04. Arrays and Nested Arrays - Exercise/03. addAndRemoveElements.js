function addAndRemoveElements(commands) {

    let num = 1, arr = [];
    const actions = {
      add: (num) => {
        arr.push(num);
      },
      remove: (num) => {
        const index = arr.lastIndexOf(num);
        arr.splice(index);
      }
    }
  
    commands.forEach(command => { actions[command](num); num++; })
  
    return arr.length > 0 ? arr.join('\n') : 'Empty'
}
