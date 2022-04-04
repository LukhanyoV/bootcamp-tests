describe('My yearsAgo function', () => {
    it('should return how many years ago it was from current year', () => {
        let results = yearsAgo(2000);
        let expected = new Date().getFullYear() - 2000; 
        assert.equal(results, expected);
    });

    it('should return how many years ago it was from current year', () => {
        let results = yearsAgo(2002);
        let expected = new Date().getFullYear() - 2002; 
        assert.equal(results, expected);
    })
});