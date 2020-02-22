const { isEmpty, User } = require('../js/User');

test('Dummy Test', () => {
  const result = 2 *3;
  expect(result).toBe(6);
});

test('isEmpty()', ()=> {
  result = isEmpty('');
  expect(result).toBeTruthy();
  result = isEmpty(' ');
  expect(result).toBeFalsy();
});

test('User', () => {
  let user = User.getCurrentUser();
  expect(user).toEqual(undefined);
  User.setCurrentUser({ name: 'James'});
  user = User.getCurrentUser();
  expect(user).toEqual({ name: 'James' });
});
