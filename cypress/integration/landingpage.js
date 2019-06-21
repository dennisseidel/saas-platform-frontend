


describe('Open Landing Page', function() {
  it('contains navigation', function() {
    cy.visit('/')
    cy.contains('Produkte').click()
    cy.url().should('include', '/')
    cy.contains('Sicherheit').click()
    cy.url().should('include', '/')
    cy.contains('Preise').click()
    cy.url().should('include', '/')
    cy.contains('Dokumentation').click()
    cy.url().should('include', '/')
    cy.contains('Support').click()
    cy.url().should('include', '/')
  })

  it('login and management console contains services and tenant management', function() {
    cy.visit('/')
    cy.contains('Login').click().get('input[name=username]').type(process.env.TEST_USER).get('input[name=password').type(process.env.TEST_USER_PW)
    cy.contains('Sign In').click()
    cy.contains('Skip').click()
    cy.url().should('include', '/management')
    cy.contains('Management Console')
    cy.contains('tenant')
    cy.contains('Services')
  })

  it('has learn more', function() {
    cy.visit('/')
    cy.wait(500)
    cy.contains('Learn More').click()
  })

  it('has product and services description', function() {
    cy.visit('/')
    cy.contains('Products and Services')
  })

  it('has offering description', function() {
    cy.visit('/')
    cy.contains('The Germany Health Cloud Platform provides compliant services')
  })
})