describe('states', function(){
  describe('products', function(){
    beforeEach(function(){
      this.state = this.$state.get('products');
    });

    it('has /products url', function(){
      expect(this.state.url).to.equal('/products');
    });

    it('has letterMap resolve property', function(){
      expect(this.state.resolve.letterMap).to.be.ok;
    });
  });
  describe('employees', function(){
    beforeEach(function(){
      this.state = this.$state.get('employees');
    });

    it('has /employees url', function(){
      expect(this.state.url).to.equal('/employees');
    });

    it('has letterMap resolve to a property', function(){
      expect(this.state.resolve.letterMap).to.be.ok;
    });
  });
});
