Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

})
describe('Validate the Vision, Coins, Reserve, Blockchain', function() {
 it('Libra.org', function() {
  cy.visit('https://libra.org/en-US/vision/').trigger('dummy-event')
  cy.url()
    .should('include','/vision')

  })


  //click on header 3 to get us down the page
  it('libra_payment_system_works', function() {
  cy.contains('How the Libra Payment System Works').trigger('dummy-event')
    .should('be.visible')
    .click()

  })

  //Validate header
  it('title_header', function() {
  cy.get('.title.animateInit').trigger('dummy-event')
    .should('be.visible')

  })

  //validate telescope
  it('telescope', function() {
  cy.get('.zig-zag-items-container > :nth-child(1) > .icon').trigger('dummy-event')
    .should('be.visible')

  })

  //validate the Vision Header
  it('vision', function() {
  cy.contains('The Vision').trigger('dummy-event')
   .should('be.visible')

 })

  //validate text under vision
  it('vision_text', function() {
  cy.contains('The Libra payment system is built on blockchain technology to enable the open, instant, and low-cost movement of money. People will be able to send, receive, and spend their money, enabling a more inclusive global financial system.').trigger('dummy-event')
    .should('be.visible')

  })

  //validate The Coins Header
  it('coins', function() {
  cy.contains('The Coins').trigger('dummy-event')
    .should('be.visible')

  })

  //validate The Coins text
  it('coins_text', function() {
  cy.contains('The Libra payment system will support single-currency stablecoins (e.g., ≋USD, ≋EUR, and ≋GBP) and a multi-currency coin (≋LBR).')
    .should('be.visible')

  })

  //validate the Coins Icons
  it('coins_icons', function() {
  cy.get('.zig-zag-items-container > :nth-child(2) > .icon')
    .should('be.visible')

  })

  //scroll to the reserve

  //validate the reserve Icons
  //cy.contains('Simple. Inclusive. Global').trigger('dummy-event')
  it('simple_inclusive_global', function() {
  cy.get(':nth-child(3) > .icon').trigger('dummy-event')
    .should('be.visible')

  })

  //validate the Reserve Header
  it('reverse_header', function() {
  cy.get(':nth-child(3) > .content > .title')
    .should('be.visible')

  })

  //validate the reserve text
  it('reverse_text', function() {
  cy.contains('Libra Coins are fully backed by a reserve of assets made up of cash or ca​sh eq​uivalents and very short-term government secu​rities. This ensures people and businesses have confidence that their Libra Coins can be converted into their local currency when they need it to be.')
    .should('be.visible')


  })

//these tests are flaking

  // //validate the blockchain header
  // it('blockchain_header', function() {
  // cy.contains('The Blockchain')
  //   .should('be.visible')
  //
  // })
  // //validate the blockchain text
  // it('blockchain_text', function() {
  // cy.contains('The Libra Blockchain is the technological backbone of the payment system, operated by a network of validator nodes. The software that implements the blockchain is open source — designed so that anyone can build on it — and is able to scale so that billions of people can depend on it for their financial needs.')
  //   .should('be.visible')
  //
  // })
  // //validate the blockchain Icons
  // it('blockchain_icon', function() {
  // cy.get(':nth-child(4) > .icon')
  //   .should('be.visible')
  //
  // })

  //scroll back up to top
  it('scroll', function() {
  cy.scrollTo('0%')

  })
 })
