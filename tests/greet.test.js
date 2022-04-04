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
});