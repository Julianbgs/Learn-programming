function testOOP() {
    var val = 6;
    this.run = function () {
        console.log('success');
    };
}
var test = new testOOP();
test.run();