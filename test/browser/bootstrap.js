var $state, $injector;
beforeEach(module('app'));
beforeEach(inject(function(_$state_, _$injector_){
  $state = _$state_;
  $injector = _$injector_;
}));
