// This is an exercise from old exam prep 15.02.2021

describe('dealership', () => {

    const oldModel = 'Audi A4 B8';
    const newPrice = 30000;
    const discount = 15000;
    const finalPrice = newPrice - discount;
    
    const accessories = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
    const selectedIndexes = [0,2]

    describe('newCarCost function', () => {
        it('works with correct data', () => {
            expect(dealership.newCarCost(oldModel, newPrice)).to.equal(finalPrice)
        })
        it('doesn\'t work with incorrect data', () => {
            expect(dealership.newCarCost('aaa', newPrice)).to.equal(newPrice)
            expect(dealership.newCarCost(0, newPrice)).to.equal(newPrice)
            expect(dealership.newCarCost([], newPrice)).to.equal(newPrice)
            expect(dealership.newCarCost({}, newPrice)).to.equal(newPrice)
            expect(dealership.newCarCost(null, newPrice)).to.equal(newPrice)
        })
    }),
    describe('carEquipment function', () => { 
        // first param is an array of accessories
        // second is an array of indexes of selected accessories which need to be returned in an array
        // indexes are always valid
        it('returns empty array if second parameter is empty', () => {
            expect(dealership.carEquipment(accessories, [])).to.deep.equal([])
        })
        it('works with correct data', () => {
            expect(dealership.carEquipment(accessories, selectedIndexes)).to.deep.equal(['heated seats', 'sport rims'])
        })

    }),
    describe('euroCategory function', () => {
        const total = finalPrice - (finalPrice * 0.05);

        it('returns discount message if euroCategory is 4 or higher', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${total}.`)
            expect(dealership.euroCategory(4.1)).to.equal(`We have added 5% discount to the final price: ${total}.`)
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${total}.`)
            expect(dealership.euroCategory('5')).to.equal(`We have added 5% discount to the final price: ${total}.`)
            expect(dealership.euroCategory('4')).to.equal(`We have added 5% discount to the final price: ${total}.`)
        })
        it('returns no discount message otherwise', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(-4)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('returns no discount message on wrong input', () => {
            expect(dealership.euroCategory({})).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory([])).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(null)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
    })
})

/* The tests above test the object below

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}
*/
