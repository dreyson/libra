Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

})
describe('Validating the Libra White Paper', function() {
  it('Libra.org', function() {
  cy.visit('https://libra.org/en-US/vision/')
  cy.url()
    .should('include','/vision')

  //validate 'the Libra White Paper'
  cy.contains('The Libra White Paper').trigger('dummy-event')
    .should('be.visible')
    .click()

  //Validate white paper title
  cy.get('#whitepaper')
    .should('be.visible')

  //validate white paper text
  cy.contains('The Payment System. The Blockchain. The Reserve. The Association.').trigger('dummy-event')
    .should('be.visible')

  //click on white paper links
  cy.get('.content > .CTA > .cta-content > .text')
    .should('be.visible')
    .click({force: true});

  })


  it('cover_letter', function() {
  //validate header
  cy.get('#cover-letter')
    .should('be.visible')

  //validate Note to readers text
  cy.contains('Note to readers: The first Libra Association white paper was published in June 2019. This new Association white paper, published in April 2020, is intended to be a stand-alone update regarding the plans of the Association. Additionally, supporting technical papers also published in June 2019 have been edited or retired.').trigger('dummy-event')
    .should('be.visible')

  //validate all headers
  cy.contains('Offering single-currency stablecoins in addition to the multi-currency coin').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Enhancing the safety of the Libra payment system with a robust compliance framework').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Forgoing the future transition to a permissionless system while maintaining its key economic properties').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Building strong protections into the design of the Libra Reserve').trigger('dummy-event')
    .should('be.visible')

    })

//validate introduction
  it('introduction', function() {
  cy.get('#introduction')
    .should('be.visible')

  cy.contains('The opportunity').trigger('dummy-event')
    .should('be.visible')
//add

    })


  //validate the libra payment system
  it('payment_system', function() {
  cy.get('#the-libra-payment-system > .title-container > h1').trigger('dummy-event')
    .should('be.visible')
//add
    })


  //Validate libra Blockchain
  it('libra_blockchain', function() {
  cy.get('#the-libra-blockchain > .title-container > h1').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Designing and using the Move programming language').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Using a Byzantine Fault Tolerant (BFT) consensus approach').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Adopting and iterating on widely adopted blockchain data structures').trigger('dummy-event')
    .should('be.visible')
//add

    })

  //validate economic and the libra reserve
  it('economicand_libra_reserve', function() {
  cy.get('#the-economic-and-the-libra-reserve > .title-container > h1').trigger('dummy-event')
    .should('be.visible')

  cy.contains('The Libra Reserve and protections').trigger('dummy-event')
    .should('be.visible')

  cy.contains('The importance of full backing and risk mitigation').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Custody and Designated Dealers').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Emergency operations').trigger('dummy-event')
    .should('be.visible')
//add
    })

  //validate compliance-and-the-prevention-of-illicit-activity
  it('compliance_and_the_prevention_of_illicit-activity', function() {
  cy.get('#compliance-and-the-prevention-of-illicit-activity > .title-container > h1').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Types of participants and payments activity on the Libra network').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Details of compliance and safety controls across the Libra network').trigger('dummy-event')
    .should('be.visible')

//add A LOT
    })

  //validate open and competitive
  it('open_competitive', function() {
  cy.get('#an-open-and-competitive-network > .title-container > h1').trigger('dummy-event')
    .should('be.visible')

  cy.contains('Exploring an Open, Transparent, and Competitive Market for Network Services and Governance').trigger('dummy-event')
    .should('be.visible')

//add

    })
    //validate libra_association
  it('libra_association', function() {
  cy.get('#the-libra-association > .title-container').trigger('dummy-event')
    .should('be.visible')
  cy.contains('How to get involved').trigger('dummy-event')
    .should('be.visible')
  //add
    })

  //validate whats next
  it('whats_next', function() {
  cy.get('#whats-next > .title-container > h1').trigger('dummy-event')
    .should('be.visible')

    //add
    })

  //validate conclusion
  it('conclusion', function() {
  cy.get('#conclusion > .title-container').trigger('dummy-event')
    .should('be.visible')

//add

    })

  it('Libra_lexicon', function() {
  // Validate Libra Lexicon links
  cy.contains('Libra Lexicon').trigger('dummy-event')
    .should('be.visible')

    })

    //validate links and click
  it('Blockchain_link', function() {
  cy.get('[aria-controls="Blockchain"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('The technology underpinning the Libra payment system. Blockchain is a technology that uses cryptography to allow a distributed collection of independent servers, or nodes, to operate a database of transactions.')
    .should('be.visible')

    })

  it('Central_Bank_link', function() {
  cy.get('[aria-controls="Central Bank Digital Currency (CBDC)"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('An electronic form of central bank money that could be used by households and businesses to make payments and store value (Bank of England, 2020).')
    .should('be.visible')

    })

  it('Cryptography', function() {
  cy.get('[aria-controls="Cryptography"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('A tool for protecting the integrity of information, which is a key component of blockchain technology.')
    .should('be.visible')

    })

  it('Fiat_Currency_link', function() {
  cy.get('[aria-controls="Fiat currency"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('Fiat money is a currency without intrinsic value that has been established as money by government regulation. Fiat money has value only because a government maintains its value, and because parties engaging in exchange agree on its value. It contrasts with commodity money (where the value of money comes from the materials that comprise it, e.g., actual gold coins) and representative money (in which money represents a claim on a physical asset, e.g., a gold standard).')
    .should('be.visible')

    })

  it('Byzantine_Fault_Tolerant_link', function() {
  cy.get('[aria-controls="Byzantine Fault Tolerant (BFT)"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('Byzantine Fault Tolerance (BFT) is the ability of a distributed system to provide safety guarantees in the presence of faulty, or "Byzantine," members. BFT consensus protocols are designed to function correctly even if some validator nodes — up to one-third of the network — are compromised or fail.')
    .should('be.visible')

    })

  it('Consensus_protocol_link', function() {
  cy.get('[aria-controls="Consensus protocol"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('Consensus protocol allows nodes to collectively reach an agreement on whether to accept or reject a transaction.')
    .should('be.visible')

    })

  it('Designated_Dealers_link', function() {
  cy.get('[aria-controls="Designated Dealers"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('Entities that have the right, pursuant to a contract with the Libra Association subsidiary Libra Networks, to purchase Libra Coins from and sell Libra Coins to Libra Networks.')
    .should('be.visible')

    })

  it('Libra_Association_link', function() {
  cy.get('[aria-controls="Libra Association"] > .clickable-section > .title')
    .should('be.visible')
    .click()
  cy.contains('The Libra Association is an independent membership organization headquartered in Geneva, Switzerland. Membership consists of geographically distributed and diverse businesses and nonprofit organizations. The Association’s purpose is to coordinate and provide a framework of governance decision-making for the Libra network and Libra Reserve; to oversee the operation of the Libra payment system; to facilitate the provision of services on top of the Libra Blockchain in a safe and compliant manner; and to establish social impact grant-making in support of financial inclusion.')
    .should('be.visible')

  })
})
