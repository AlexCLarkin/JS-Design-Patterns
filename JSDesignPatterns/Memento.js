var Person = function (name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state
}

Person.prototype = {

    hydrate: function () {
        var memento = JSON.stringify(this);
        return memento;
    },

    dehydrate: function (memento) {
        var m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}

var CareTaker = function () {
    this.mementos = {};

    this.add = function (keyy, memento) {
        this.mementos[key] = memento;
    },

    this.get = function (key) {
        return this.mementos[key];
    }
}

function run() {

    var mike = new Person("Mike foley", "1112 Main", "Dallas", "Texas");
    var john = new Person("John Wang", "48th Street", "San Jose", "California");
    var caretaker = new CareTaker();

    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());
    

    mike.name = "King Kong"
    john.name = "Spider-Man"

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    console.log(mike.name);
    console.log(john.name);
}