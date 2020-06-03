Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

})
describe('Validate the Vision header 1', function() {
 it('Libra.org', function() {
  cy.visit('https://libra.org/en-US/vision/')
  cy.url()
    .should('include','/vision')

  //Validate background
  cy.get('.Hero > .container')
    .should('be.visible')

  //Validate header 1
  cy.get('.Hero > .container > .content > .title')
    .should('be.visible')

  //Validate text under title
  cy.contains('A simple global payment system and financial infrastructure that empowers billions of people.')
    .should('be.visible')

  //validate 'Jump to links'
  cy.get('.jump-to-title')
    .should('be.visible')

  //validate 'how Libra works'
  cy.contains('How the Libra Payment System Works')
    .should('be.visible')

  //validate 'the Libra White Paper'
  cy.contains('The Libra White Paper')
    .should('be.visible')

  //click and validate How the Libra Payment System Works
  cy.contains('How the Libra Payment System Works')
    .click()
  cy.get('.title.animateInit')
    .should('be.visible')

  //scroll back up to top
  cy.scrollTo('0%')

  //click and validate How Libra Works
  cy.contains('The Libra White Paper')
    .click()
  cy.contains('The Libra White Paper')
    .should('be.visible')

  //scroll back up to top
  cy.scrollTo('0%')

  })
 })
