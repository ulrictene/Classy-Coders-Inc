const { Employees } = require("./Employees");

class SoftwareEngineer  extends Employees{
    #programmingLanguages
    constructor(programmingLanguage) {
    this.#programmingLanguages = programmingLanguage;
    }
    getprogrammingLanguages() {
        return this.#programmingLanguages
    }
    setprogrammingLanguages(language) {
        return this.#programmingLanguages = language;
    }


    
}

module.exports = {
    SoftwareEngineer,
}