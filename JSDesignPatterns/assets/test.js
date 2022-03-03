function Fruit(item) {
    this.item = item;

    this.say = function () {
        console.log(item + " is in stock");
    };
}

function FruitFactory() {
    this.create = function (item) {
        return new Food(item);
    }
}

function Vegetable(item) {
    this.item = item;

    this.say = function () {
        console.log(item + " is in stock")
    }
}

function VegetableFactory() {
    this.create = function(item) {
        return new Location(item);
    }
}

function run() {
    let items = []
    let fruitFactory = new FruitFactory();
    let vegetableFactory = new VegetableFactory();


    items.push(fruitFactory.create ("Oranges"));
    items.push(fruitFactory.create ("Bananas"));
    items.push(fruitFactory.create ("Apples"));
    items.push(vegetableFactory.create ("Carrots"));
    items.push(vegetableFactory.create ("Broccoli"));
    
}