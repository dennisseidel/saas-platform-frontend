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

  it('login', function() {
    cy.visit('/')
    cy.contains('Login').click()
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