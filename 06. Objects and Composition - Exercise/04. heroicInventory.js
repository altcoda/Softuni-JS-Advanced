function heroicInventory(heroes) {
  
    let heroesArr = [];
    heroes.forEach(hero => {
      const [name, level, items] = hero.split(' / ');
  
      heroesArr.push({
        name: name,
        level: Number(level),
        items: items ? items.split(', ') : []
      })
    })
  
    return JSON.stringify(heroesArr)
}
