// Testting my greet function
describe('My greet function' , function(){
    it('should return Hello, Lukhanyo' , function(){
        let results = greet("Lukhanyo");
        let expected = "Hello, Lukhanyo"
        assert.equal(results, expected);
    });

    it('should return Hello, World' , function(){
        let results = greet("World");
        let expected = "Hello, World"
        assert.equal(results, expected);
    });

    it('should return Hello, undefined', function(){
        let results = greet();
        let expected = "Hello, undefined";
        assert.equal(results, expected);
    });
});


// Testing my isFromBellvile function
describe('My isFromBellvile function', () => {
    it('should return true since the plates number starts with \'CY\'', () => {
        let results = isFromBellville("CY 123");
        let expected = true;
        assert.equal(results, expected);
    });

    it('should return false since the plate number does not start with \'CY\'', () => {
        let results = isFromBellville("CJ 123");
        let expected = false;
        assert.equal(results, expected);
    });
});


