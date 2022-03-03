var Employee = function (name, salary, vacation) {

    var self = this;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getName = function () {
        return salary;
    };

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (sal) {
        salary = sal;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function (vac) {
        vacation = vac;
    };
};

function run() {

    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 20000, 21),
        new Employee("Boss", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        alert(emp.getName() + ": $" + emp.getSalary() +
        " and " + emp.getVacation() + " vacation days");
    }
}