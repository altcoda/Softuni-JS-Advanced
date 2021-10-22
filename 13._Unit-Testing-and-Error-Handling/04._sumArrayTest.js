describe('Sum Array', () => {
    it('adds numbers', () => {
        expect(sum([1,2])).to.equal(3)
    })
    it('works with strings', () => {
        expect(sum(['1','2'])).to.equal(3)
    })
})
