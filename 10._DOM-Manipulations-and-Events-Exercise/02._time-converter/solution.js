function attachEventsListeners() {

  const ratios = {
      days: 1,
      hours: 24,
      minutes: 1440,
      seconds: 86400
  };

  function convert(value, unit) {
      const inDays = value / ratios[unit];
      
      return {
          days: inDays,
          hours: inDays * ratios.hours,
          minutes: inDays * ratios.minutes,
          seconds: inDays * ratios.seconds
      }
  }

  const inputs = Object
    .keys(ratios)
    .map(unit => document.getElementById(unit))
    .reduce((a,c) => Object.assign(a, {[c.id]: c}),{})

  document.querySelector('main').addEventListener('click', onConvert)
  function onConvert(e) {
    if(e.target.tagName == 'INPUT' && e.target.type == 'button') {
      const input = e.target.parentElement.querySelector('input[type="text"]');
    
      const time = convert(Number(input.value), input.id);
      Object.keys(time).forEach(k => inputs[k].value = time[k])
    }
  }

}
