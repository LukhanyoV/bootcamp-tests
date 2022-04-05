// Testting my greet function
describe('My greet function' , function(){
    it('should return \"Hello, Lukhanyo\" if given input is \"Lukhanyo\" a string' , function(){
        let results = greet("Lukhanyo");
        let expected = "Hello, Lukhanyo"
        assert.equal(results, expected);
    });

    it('should return \'Invalid input\' when given an input that is not a string', function(){
        let results = greet();
        let expected = "Invalid input";
        assert.equal(results, expected);
    });
});



