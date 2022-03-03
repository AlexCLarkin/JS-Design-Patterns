function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

var Command = function (execute, undo, value) {
    this.execte = execute;
    this.undo = undo;
    this.value = value;
}


var AddCommand = function (value) {
    return new Command(add, sub, value);
};

var SubCommand = function (value) {
    return new Command(sub, add, value);
};

var MulCommand = function(value) {
    return new Command(mul, div, value);
};

var DivCommand = function(value) {
    return new Command(div, mul, value);
};

var Calculator = function() {
    var current = 0;
    var commands = [];

    function action(command) {
        var name = command.execute.toString().subtr(9,3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value)
            commands.push(command);
            console.log(action(command) + ": " + command.value);
        },

        undo: function (command) {
            var command = commands.pop();
            current = command.undo(current,command.value);
            console.log("Undo" + action(command) + ": " + command.value);
        },

        getCurrentValue: function() {
            return current;
        }
    }
}

function run() {
    var calculator = new Calculator();

    calculator.execute(new AddCommand(244));
    calculator.execute(new SubCommand(22));
    calculator.execute(new MulCommand(10));
    calculator.execute(new DivCommand(3));

    calculator.undo();
    calculator.undo();

    console.log("\nValue " + calculator.getCurrentValue());
}