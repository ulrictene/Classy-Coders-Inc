const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales
    constructor(clients, totalSales) {
        this.clients = clients;
        this.#totalSales = totalSales;
    }
getSalesNumber() {
    return this.#totalSales
}
makesale(amount) {
    return this.#totalSales = amount;
}


    
}

module.exports = {
    SalesPerson,
}