Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

})
describe('Validate the Vision header 3', function() {
 it('Libra.org', function() {
  cy.visit('https://libra.org/en-US/vision/')
  cy.url()
    .should('include','/vision')

  //click on header 3 to get us down the page
  cy.contains('How the Libra Payment System Works')
    .should('be.visible')
    .click()

  //Validate header
  cy.get('.title.animateInit')
    .should('be.visible')

  //validate telescope
  cy.get('.zig-zag-items-container > :nth-child(1) > .icon')
    .should('be.visible')

  //validate the Vision Header
  cy.contains('The Vision')
   .should('be.visible')

  //validate text under vision
  cy.contains('The Libra payment system is built on blockchain technology to enable the open, instant, and low-cost movement of money. People will be able to send, receive, and spend their money, enabling a more inclusive global financial system.')
    .should('be.visible')

  //validate The Coins Header
  cy.contains('The Coins')
    .should('be.visible')

  //validate The Coins text
  cy.contains('The Libra payment system will support single-currency stablecoins (e.g., ≋USD, ≋EUR, and ≋GBP) and a multi-currency coin (≋LBR).')
    .should('be.visible')

  //validate the Coins Icons
  cy.get('.zig-zag-items-container > :nth-child(2) > .icon')
    .should('be.visible')

  //scroll to the reserve

  //validate the reserve Icons
  //cy.contains('Simple. Inclusive. Global').trigger('dummy-event')
  cy.get('.zig-zag-items-container > :nth-child(2) > .icon').trigger('dummy-event')
    .should('be.visible')

  //validate the Reserve Header
  // cy.contains('The Coins').trigger('dummy-event')
  //   .should('be.visible')

  //validate the reserve text
  cy.contains('Libra Coins are fully backed by a reserve of assets made up of cash or ca​sh eq​uivalents and very short-term government secu​rities. This ensures people and businesses have confidence that their Libra Coins can be converted into their local currency when they need it to be.')
    .should('be.visible')

  //validate the blockchain header
  cy.get(':nth-child(4) > .content > .title')
    .should('be.visible')

  //validate the blockchain text
  cy.contains('The Libra Blockchain is the technological backbone of the payment system, operated by a network of validator nodes. The software that implements the blockchain is open source — designed so that anyone can build on it — and is able to scale so that billions of people can depend on it for their financial needs.')
    .should('be.visible')

  //validate the blockchain Icons
  cy.get(':nth-child(4) > .icon')
    .should('be.visible')

  cy.contains('The Blockchain')
    .should('be.visible')

  cy.contains('The Libra Blockchain is the technological backbone of the payment system, operated by a network of validator nodes. The software that implements the blockchain is open source — designed so that anyone can build on it — and is able to scale so that billions of people can depend on it for their financial needs.')
    .should('be.visible')



  })
 })
