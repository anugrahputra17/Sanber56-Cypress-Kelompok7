it.only('failed login - input valid email', () => {
    cy.fixture('users.json').then((users) => {
      const datauser = users[2];
      cy.login(datauser.email, datauser.password)
  });
});

it('failed login - wrong email', () => {
    cy.fixture('users.json').then((users) => {
      const datauser = users[3];
      cy.login(datauser.email, datauser.password)
      cy.get('.message-error').should('contain.text','sign-in was incorrect')
  });
});


it('failed login - wrong password', () => {
    cy.fixture('users.json').then((users) => {
      const datauser = users[1];
      cy.login(datauser.email, datauser.password)
      cy.get('.message-error').should('contain.text','sign-in was incorrect')
  });
});

it('succes login', () => {
    cy.fixture('users.json').then((users) => {
      const datauser = users[0];
      cy.login(datauser.email, datauser.password)
      cy.get('.logged-in').should('contain.text','Welcome')
  });
});

