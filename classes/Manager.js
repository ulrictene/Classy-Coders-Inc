const { Employees } = require("./Employees");

class Manager extends Employees {
    #employeesManaged;
    constructor(department,employeesManaged) {
        this.department = department;
        this.#employeesManaged = employeesManaged;
    }
getEmployeesManaged() {
    return this.#employeesManaged
}
setEmployeesManaged(employee) {
    return this.#employeesManaged = employee
}


    
}

module.exports = {
    Manager,
}