describe('EmployeeFactory', function(){
  var EmployeeFactory;
  beforeEach(function(){
    EmployeeFactory = this.$injector.get('EmployeeFactory');
  });

  it('exists', function(){
    expect(EmployeeFactory).to.be.ok;
  });

  describe('fetchByLetter', function(){
    it('calls api', function(){
      this.$httpBackend.when('GET', '/api/employees/A')
        .respond([{}, {}]);
      this.$httpBackend.expectGET('/api/employees/A');
      EmployeeFactory.fetchByLetter('A')
        .then(function(employees){
          expect(employees.length).to.equal(2);
        });
      this.$httpBackend.flush();
    });
  });

  describe('getMap', function(){
    it('calls api', function(){
      var map = {
        foo: 'bar'
      };
      this.$httpBackend.when('GET', '/api/employees/map')
        .respond(map);
      this.$httpBackend.expectGET('/api/employees/map');
      EmployeeFactory.getMap()
        .then(function(_map){
          expect(_map).to.eql(map);
        });
      this.$httpBackend.flush();
    });
  });
});
