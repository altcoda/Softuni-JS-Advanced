describe('Calculator', () => {
    // it might have a state so we null it before testing
    let instance = null;

    // this runs before each block
    beforeEach(() => {
        instance = createCalculator();
    })

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })

    it('works with strings', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    })

    it('adds a number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })

    it('adds multiple numbers', () => {
        instance.add(1)
        instance.add(2)
        expect(instance.get()).to.equal(3)
    })

    it('subtracts single number', () => {
        instance.subtract(1)
        expect(instance.get()).to.equal(-1)
    })

    it('works with multiple methods', () => {
        instance.add(1)
        instance.subtract(1)
        expect(instance.get()).to.equal(0)
    })
})
