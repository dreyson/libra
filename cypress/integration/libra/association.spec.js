Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

})
describe('Validating the Libra Assiciation Page', function() {
  it('Libra.org', function() {
  cy.visit('https://libra.org/en-US/association/')
  cy.url()
    .should('include','association')

    //validate links
  cy.contains('Member Responsibility')
    .should('be.visible')
    .click()
  cy.contains('Member responsibility')
    .should('be.visible')

  cy.contains('The Executive Team')
    .should('be.visible')
    .click()
  cy.get('#executive_team')
    .should('be.visible')

  cy.contains('The Board of Directors')
    .should('be.visible')
    .click()
  cy.get('#board_of_directors')
    .should('be.visible')

  cy.contains('The Technical Steering Committee')
    .should('be.visible')
    .click()
  cy.get('#technical_steering_committee')
    .should('be.visible')

  cy.contains('The Members')
    .should('be.visible')
    .click()
  cy.get('#the_members')
    .should('be.visible')

    //validate page header
  cy.contains('The Libra Association')
    .should('be.visible')

  cy.contains('The Libra Association is an independent membership organization, headquartered in Geneva, Switzerland.')
    .should('be.visible')


  //validate Open Source, Scalable, Secure Using Scroll
  //icon
  cy.get('.wrapper > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  //header
  cy.contains('Open Source').trigger('dummy-event')
    .should('be.visible')
  //text
  cy.contains('Fostering an open-source community to spur the development of a robust network of financial products and services to help people access and use the Libra payment system.')
    .should('be.visible')

    //icon
  cy.get('.wrapper > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
    //header
  cy.contains('Scalable')
    .should('be.visible')
  //text
  cy.contains('Growing the network by adding more validator nodes and coordinating the technical roadmap among the validator nodes.')
    .should('be.visible')

  //icon
  cy.get('.wrapper > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  //header
  cy.contains('Secure')
    .should('be.visible')
  //text
  cy.contains('Facilitating the provision of services in the Libra payment system in a safe and compliant manner.')
    .should('be.visible')


  // validate role
    //Icon
  cy.get('.zig-zag-items-container > :nth-child(1) > .icon')
    .should('be.visible')
    //text
  cy.contains('Role')
    .should('be.visible')
  cy.contains('The Association is responsible for the governance of the Libra network and the development of the Libra project.')
    .should('be.visible')

  //validate organization
  //Icon
  cy.get(':nth-child(2) > .icon')
    .should('be.visible')
  //text
  cy.contains('Organization')
    .should('be.visible')
  cy.contains('The Association is governed by the Libra Association Council, which is comprised of one representative per Association Member.')
    .should('be.visible')



  //validate 'the Libra White Paper'
  // cy.contains('The Libra White Paper').trigger('dummy-event')
  //   .should('be.visible')
  //   .click()



  })
})
