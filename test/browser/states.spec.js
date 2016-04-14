describe('states', function(){
  describe('products', function(){
    var state;
    beforeEach(function(){
      state = $state.get('products');
    });

    it('has /products url', function(){
      expect(state.url).to.equal('/products');
    });

    it('has letterMap resolve property', function(){
      expect(state.resolve.letterMap).to.be.ok;
    });
  });
  describe('employees', function(){
    var state;
    beforeEach(function(){
      state = $state.get('employees');
    });

    it('has /employees url', function(){
      expect(state.url).to.equal('/employees');
    });

    it('has letterMap resolve to a property', function(){
      expect(state.resolve.letterMap).to.be.ok;
    });
  });
});
