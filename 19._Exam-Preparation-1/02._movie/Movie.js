class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this._revenue = 0;
        this._ticketsSold = 0;
    }

    newScreening(date, hall, description) {
        if(this.screenings.some(s => s.date == date && s.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }
        this.screenings.push({
            date,
            hall,
            description
        })

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, tickets) {
        const screening = this.screenings.find(s => s.date == date && s.hall == hall)
        if(screening === undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }

        const index = this.screenings.indexOf(screening);
        this.screenings.splice(index, 1);

        const profit = tickets * this.ticketPrice;
        this._revenue += tickets * this.ticketPrice;
        this._ticketsSold += tickets;
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`
    } 

    toString() {
        let output = [
            `${this.movieName} full information:`,
            `Total profit: ${this._revenue.toFixed(0)}$`,
            `Sold Tickets: ${this._ticketsSold}`
        ];

        if(this.screenings.length === 0) {
            output.push('No more screenings!')
        } else {
            output.push('Remaining film screenings:')
            this.screenings.sort((a,b) => a.hall.localeCompare(b.hall)).forEach(s => output.push(`${s.hall} - ${s.date} - ${s.description}`))
        }

        return output.join('\n')
    }
}
