describe('Auth Form E2E Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/');
  });

  it('should render the login form by default', () => {
    cy.get('.LoginComponent').should('exist');
    cy.contains('Login').should('exist');
    cy.contains('Password').should('exist');
    cy.get('a[href="email-send"]').should('contain', 'Forgot password?');
  });

  it('should switch to registration form', () => {
    cy.contains('New to LightSideMessenger?').find('a').click();
    cy.get('.RegisterComponent').should('exist');
    cy.contains('Username').should('exist');
    cy.contains('Back to Sign in').click();
    cy.get('.LoginComponent').should('exist');
  });

  it('should fill login form and click submit', () => {
    cy.get('input[name="login"]').type('bob@example.com');
    cy.get('input[name="password"]').type('secret123');
    cy.get('.btn').contains('Submit').click();
    cy.get('.LoginComponent').should('exist'); 
  });

  it('should fill registration form and submit', () => {
    cy.contains('New to LightSideMessenger?').find('a').click();
    cy.get('input[name="username"]').type('TestE2EUser');
    cy.get('input[name="login"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('newpassword123');
    cy.get('.btn').contains('Submit').click();
  });

  it('should handle "Forgot password?" link', () => {
    cy.get('a[href="email-send"]').click();
  });

  it('should switch theme and validate UI elements', () => {
    cy.get('body').invoke('addClass', 'darkTheme'); 
    cy.get('label').each(($label) => {
      expect($label).to.have.css('color', 'rgb(255, 255, 255)'); 
    });
  });
});
