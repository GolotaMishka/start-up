before(() => {
  cy.login();
});

describe('should run application', () => {
  it('is running', () => {
    cy.visit('/');
  });
});
