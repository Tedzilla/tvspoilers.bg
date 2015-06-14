angular.module('firebase.config', [])
  .constant('FBURL', 'https://tvspoilers-bg.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');
