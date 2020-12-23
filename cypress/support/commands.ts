// test user

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    // declare additional custom commands as methods, like
    login(): void;
  }
}

Cypress.Commands.add('login', () => {
  return window.localStorage.setItem(
    'auth',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJldmlld2VyQGZpcmUucHdjLmJlIiwidW5pcXVlX25hbWUiOiJSZXZpZXdlciIsInJvbGUiOiJCRS1GSVJFLVJldmlld2VyIiwibmJmIjoxNjA4MDQwNzk4LCJleHAiOjE2Mzk1NzY3OTgsImlhdCI6MTYwODA0MDc5OCwiYXVkIjoidXJuOmZpcmV1YXQucHdjLmJlIn0.6_bTV8j65VvDNqtFf4JGR9rQX0boyTb_txwbFzKw9Ts',
  );
});
