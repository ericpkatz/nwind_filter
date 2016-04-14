beforeEach(module('app'));
beforeEach(inject(function(_$state_, _$injector_, _$httpBackend_){
  this.$state = _$state_;
  this.$injector = _$injector_;
  this.$httpBackend = _$httpBackend_;
}));

afterEach(function(){
  this.$httpBackend.verifyNoOutstandingRequest();
  this.$httpBackend.verifyNoOutstandingExpectation();
});


