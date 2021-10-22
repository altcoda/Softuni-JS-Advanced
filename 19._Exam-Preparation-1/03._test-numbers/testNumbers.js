describe('Test Numbers', () => {    
    describe('SumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(1,2)).to.equal('3.00')
        })

        it('works with negative number', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00')
        })

        it('works with floating points', () => {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89')
        })

        it('returns undefined with string parameters', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined
        })

        it('returns undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined
        })
    })

    describe('NumberChecker', () => {
        it('works with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd')
        })
        it('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even')
        })
        it('works with odd value as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd')
        })
        it('works with even value as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even')
        })
        it('detects invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
            expect(() => testNumbers.numberChecker()).to.throw();
        })

    })

    describe('AverageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2)
        })

        it('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5,2.5,3.5])).to.equal(2.5)
        })
         
    })
})


/* The tests above are for the functions below

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

*/
