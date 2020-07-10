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

  })

  //Validate background
 it('background', function() {
  cy.get('.Hero > .container')
    .should('be.visible')

  })

  //Validate header 1
  it('header', function() {
  cy.get('.Hero > .container > .content > .title')
    .should('be.visible')

  })

  //Validate text under title
  it('title_text', function() {
  cy.contains('A simple global payment system and financial infrastructure that empowers billions of people.')
    .should('be.visible')

  })

  //validate 'Jump to links'
  it('jump_to_title', function() {
  cy.get('.jump-to-title')
    .should('be.visible')

  })

  //validate 'how Libra works'
  it('payment_system', function() {
  cy.contains('How the Libra Payment System Works')
    .should('be.visible')

  })

  //validate 'the Libra White Paper'
  it('libra_white_paper', function() {
  cy.contains('The Libra White Paper')
    .should('be.visible')

  })

  //click and validate How the Libra Payment System Works
  it('pmt_sys_click', function() {
  cy.contains('How the Libra Payment System Works')
    .click()
  cy.get('.title.animateInit')
    .should('be.visible')

  })

  //scroll back up to top
  it('scroll', function() {
  cy.scrollTo('0%')

  })

  //click and validate How Libra Works
  it('white_paper_click', function() {
  cy.contains('The Libra White Paper')
    .click()
  cy.contains('The Libra White Paper')
    .should('be.visible')

  })

  //scroll back up to top
  it('final_scroll', function() {
  cy.scrollTo('0%')

  })
 })
