
var Request = function (amount) {
    this.amount = amount;
    console.log("Requested: £" + amount + "\n");
}

Request.prototype = {
    get: function (note) {
        var count = Math.floor(this.amount / note);
        this.amount -= count * note;
        console.log("Dispense " + count + " £" + note + " notes");
        return this;
    }
}
function run() {
    var request = new Request(378);

    request.get(100).get(50).get(20).get(10).get(5).get(1);
}
