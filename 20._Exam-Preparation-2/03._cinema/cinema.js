
// Commented out are possible tests, but not required to get 100%

describe('Test Cinema Object', () => {

    const testMovies = ["King Kong", "The Tomorrow War", "Joker"];
    
    const schedule = {
        "Premiere": 12.00,
        "Normal": 7.50,
        "Discount": 5.50
    }

    describe('ShowMovies', () => {
        it('returns array of movies joined by comma', () => {
            expect(cinema.showMovies(testMovies)).to.equal(testMovies.join(', '))
        })
        it('doesn\'t work with empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        })
    })

    
    describe('TicketPrice', () => {
        it('returns price if available', () => {
            for(let type in schedule) {
                expect(cinema.ticketPrice(type)).to.equal(schedule[type])
                expect(cinema.ticketPrice(type)).to.equal(schedule[type])
                expect(cinema.ticketPrice(type)).to.equal(schedule[type])
            }
        })
        it('doesn\'t accept wrong parameters', () => {
            // expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.')
            expect(() => cinema.ticketPrice('abc')).to.throw('Invalid projection type.')
        })
        
    })

    
    describe('SwapSeatsInHall', () => {
        it('accepts two numbers', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.contain('Successful')
            expect(cinema.swapSeatsInHall(1, 20)).to.contain('Successful')
            expect(cinema.swapSeatsInHall(20, 1)).to.contain('Successful')
        })
        it('doesn\'t work with wrong numbers', () => {
            expect(cinema.swapSeatsInHall(1)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(1, 21)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(0, 1)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(1, 0)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(-1, 2)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(2, -1)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(1.25, 2)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(2, 1.25)).to.contain('Unsuccessful')
        })

        it('doesn\'t work with the same seat numbers', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.contain('Unsuccessful')
        })

        it('doesn\'t work with params that aren\'t a number', () => {
            expect(cinema.swapSeatsInHall('1', 2)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(1, '2')).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(NaN, 1)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(1, NaN)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(null, 1)).to.contain('Unsuccessful')
            expect(cinema.swapSeatsInHall(1, null)).to.contain('Unsuccessful')
            // expect(cinema.swapSeatsInHall(null, null)).to.contain('Unsuccessful')
            // expect(cinema.swapSeatsInHall(undefined, 1)).to.contain('Unsuccessful')
            // expect(cinema.swapSeatsInHall(1, undefined)).to.contain('Unsuccessful')
            // expect(cinema.swapSeatsInHall(undefined, undefined)).to.contain('Unsuccessful')
        })
    })
})

/* The tests above are for the functions below

const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {
        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

*/
