function heroes() {

    const canCast = (state) => ({
      cast: (spell) => {
        console.log(`${state.name} cast ${spell}`);
        state.mana--;
      }
    })
  
    const canFight = (state) => ({
      fight: () => {
        console.log(`${state.name} slashes at the foe!`);
        state.stamina--;
      }
    })
  
    const mage = (name) => {
      let state = {
        name,
        health: 100,
        stamina: 100
      }
      return Object.assign(state, canCast(state));
    }
  
    const fighter = (name) => {
      let state = {
        name,
        health: 100,
        stamina: 100
      }
      return Object.assign(state, canFight(state));
    }
  
    return { mage: mage, fighter: fighter }
}
