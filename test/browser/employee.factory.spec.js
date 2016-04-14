describe('EmployeeFactory', function(){
  var EmployeeFactory;
  beforeEach(function(){
    EmployeeFactory = $injector.get('EmployeeFactory');
  });
  it('exists', function(){
    expect(EmployeeFactory).to.be.ok;
  
  });
});
