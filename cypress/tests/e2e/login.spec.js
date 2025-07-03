describe('Login sucess', () => {
  it.skip('login com um usuário válido', () => {
     cy.visit('http://localhost:3000/')
     cy.get("[name='username']").type('Arvilla_Hegmann')
     cy.get("[name='password']").type('s3cret')
     cy.get("[type='submit']").click()
     cy.get("[data-test='sidenav-home']").contains('Home')
  })

  it('login Fail', () => {
    cy.visit('http://localhost:3000/')
     cy.get("[name='username']").type('Arvilla')
     cy.get("[name='password']").type('secret')
     cy.get("[type='submit']").click()
     cy.get('.MuiAlert-message')

  })

  it('Register Usuario', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Luiza')
    cy.get('#lastName').type('Silva')
    cy.get('#username').type('LuizaSilva')
    cy.get('#password').type('t3ste')
    cy.get('#confirmPassword').type('t3ste')
    cy.get('[data-test="signup-submit"]').click()

  })
  it('Register Usuario Fail', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Luiza')
    cy.get('#lastName').type('Silva')
    cy.get('#username').type('LuizaSilva')
    cy.get('#password').type('t3ste')
    cy.get('#confirmPassword').type('t3s')
    cy.get('#confirmPassword-helper-text')
    
  })

});