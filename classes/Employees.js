class Employees {
    static #allEmployees = [];
  #salary;
  #isHired;
  constructor(name,position,salary,isHired) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = isHired;
    Employees.#allEmployees.push(this);
  }
  static getEmployees() {
    return Employees.#allEmployees;
  }
  static getTotalPayroll() {
    return Employees.#allEmployees *this.salary;
  }
  getsalary() {
    return this.#salary;
  }
setSalary(amount) {
    this.#salary = amount ;
}
getStatus() {
    return this.#isHired;
}
setStatus(comand) {
    if ('command' === "hire") {
        return true;
    }
    else if ('command' === "fire") {
        return false
    }
}

    
}

module.exports = {
    Employees,
}