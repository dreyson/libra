
Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

})
describe('Validate the Vision header 2', function() {
 it('Libra.org', function() {
  cy.visit('https://libra.org/en-US/vision/')
  cy.url()
    .should('include','/vision')

    })

  //validate header 2 'Simple. Inclusive. Global'
  it('Simple_Inclusive_Global_text', function() {
  cy.contains('Simple. Inclusive. Global').trigger('dummy-event')
    .should('be.visible')

    })

  //Validate Icons
  it('Simple_Inclusive_Global_icons', function() {
  cy.get(':nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  cy.get(':nth-child(2) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  cy.get(':nth-child(3) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')

    })

  //Validate text
  it('Blockchain_Technology', function() {
  cy.contains('Blockchain Technology')
    .should('be.visible')

  //Blockchain description
  cy.contains('The Libra network is built on a secure, scalable, and reliable blockchain designed so that anyone can build on it, and billions of people can depend on it.')
    .should('be.visible')

    })

  //Validate text
  it('Stable_Value', function() {
  cy.contains('Stable Value')
    .should('be.visible')

  //Stable Value description
  cy.contains('Libra Coins are backed by a reserve of assets made up of cash or ca​sh eq​uivalents and very short-term government secu​rities.')
    .should('be.visible')

  })

  //Validate text
  it('Independent_Governance', function() {
  cy.contains('Independent Governance')
    .should('be.visible')

  //Independent Governance description
  cy.contains('The Libra Association is tasked with facilitating the operation of the Libra payment system in a safe and compliant manner.')
    .should('be.visible')

    })

  //scroll back up to top
  it('Scroll to 0', function() {
  cy.scrollTo('0%')

    })
 })
