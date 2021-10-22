describe('Test Odd or Even', () => {
    it('is of type string', () => {
        expect(isOddOrEven(4)).to.be.undefined
        expect(isOddOrEven([1,2])).to.be.undefined
    })
    it('works with string of even length', () => {
        expect(isOddOrEven('abcd')).to.equal('even')
    })
    it('works with string of odd length', () => {
        expect(isOddOrEven('abc')).to.equal('odd')
    })
})