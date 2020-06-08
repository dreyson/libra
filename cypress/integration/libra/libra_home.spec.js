Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail
})
describe('Run through all pages on Libra Homepage', function() {
 it('Libra.org', function() {
   cy.visit('https://libra.org/en-US/')

// Validate Logo
  cy.get('[aria-hidden="true"] > .topNavWrapper > .logo-container > .Logo').trigger('dummy-event')
  .should('be.visible')

// Validate Header Links
// Vision
  // cy.get('[aria-hidden="true"] > ul > :nth-child(1) > a')
  cy.contains('Vision')
  .should('be.visible')
   .click({force: true});
  cy.url()
  .should('include','/vision')

// Association
  // cy.get('[aria-hidden="true"] > ul > :nth-child(2) > a')
  cy.contains('Association')
  .should('be.visible')
  .click({force: true});
  cy.url()
  .should('include','/association')

// Developers
// cy.get('.NavBar > ul > :nth-child(3) > a')
  cy.contains('Developers')
  .should('be.visible')
  .click({force: true});
  cy.url()
  .should('include','/developers')

// Partners (no longer there)
  // cy.get('.NavBar > ul > :nth-child(4) > a')
  // cy.contains('Partners')
  // .should('be.visible')
  // .click({force: true});
  // cy.url()
  // .should('include','/partners')

// Learn
  // cy.get('.NavBar > ul > :nth-child(5) > a')
  cy.contains('Learn')
  .should('be.visible')
  .click({force: true});
  cy.url()
  .should('include','/learn')

// Media
  // cy.get('.NavBar > ul > :nth-child(6) > a')
  cy.contains('Media')
  .should('be.visible')
  .click({force: true});
  cy.url()
  .should('include','/media')

  cy.contains('White Paper')
  .should('be.visible')
  .click({force: true});
  cy.url()
  .should('include','/white-paper')

  cy.visit('https://libra.org/en-US/')
  cy.url()
  .should('include','https://libra.org/en-US/')
  })

// Scroll and continue to validate elements
it('Libra.org', function() {

  cy.visit('https://libra.org/en-US/')

//
// cy.go('back')
//








  })
 })
