
let User = function (name) {
    this.name = name;
    this.say = function () {
        console.log("User: " + this.name);
    };
}

let DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name; 
    this.street = street;
    this.city = city;
    this.say = function () {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

function run() {

    let user = new User("Alex");
    user.say();
    let decorated = new DecoratedUser(user, "Spetchley", "Redditch");
    decorated.say();
}
