function tickets(array, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];

    for (const element of array) {
        
        let ticketParams = element.split('|');
        let destination = ticketParams[0];
        let price = ticketParams[1];
        let status = ticketParams[2];

        tickets.push(new Ticket(destination, Number(price), status));
    }
    return criteria != 'price' ? tickets.sort((a, b) => a[criteria].localeCompare(b[criteria])) : tickets.sort((a, b) => a[criteria] - b[criteria]);
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));
