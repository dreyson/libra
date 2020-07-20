Cypress.on('fail', (error, runnable) => {
 debugger
 // we now have access to the err instance
 // and the mocha runnable this failed on
 throw error // throw error to have test still fail

    })
describe('Validating the Libra Assiciation Page Member Responsibility', function() {
  it('membership', function() {
  cy.visit('https://libra.org/en-US/association/')
  cy.url()
    .should('include','association')

    })

    //validate links
  it('Links', function() {
  cy.contains('Member Responsibility')
    .should('be.visible')
    .click()
  cy.contains('Member responsibility')
    .should('be.visible')

    })

  //validate governance
  it('governance', function() {
  cy.get('.container > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  cy.contains('Governance')
    .should('be.visible')
  cy.contains('Members participate in key decision making for the Libra network and the Reserve. They oversee the operation of the payment system, facilitate the provision of services on top of the blockchain in a safe and compliant manner, and establish social impact grant-making in support of financial inclusion.'
)
    .should('be.visible')

    })

  // validate implementation
  it('implementation', function() {
  cy.get('.container > .Grid > .grid-container > :nth-child(2) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  cy.contains('Implementation')
    .should('be.visible')
  cy.contains('Members are responsible for developing the long-term strategy for the network and the Reserve. Each Member has one vote to ensure that no one Member has too much control over the network.')
    .should('be.visible')

    })

  // validate strategy
  it('Strategy', function() {
  cy.get('.container > .Grid > .grid-container > :nth-child(3) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  cy.contains('Strategy')
    .should('be.visible')
  cy.contains('Members run the validator nodes that operate the blockchain. Validator nodes are responsible for securing the network and validating transactions on the blockchain.')
    .should('be.visible')

    })

    //Validate the executive team
  it('executive_team', function() {
  cy.contains('The Executive Team')
    .should('be.visible')
    .click()
  cy.get('#executive_team')
    .should('be.visible')
  cy.contains('The Executive Team leads day-to-day operations, communications, relationships with key stakeholders, and business and developer partnerships.')
    .should('be.visible')

    })

    //Bertrand Perez
  it('Bertrand_Perez', function() {
  cy.get('#executive_team > .container > .Grid > .grid-container > :nth-child(1) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Bertrand Perez')
    .should('be.visible')
  cy.contains('COO and Managing Director')
    .should('be.visible')
  cy.contains('Bertrand brings deep expertise in payments innovation plus extensive management experience to the Association’s day-to-day operations.')
    .should('be.visible')

    })

    //Kurt Hemecker
  it('Kurt_Hemecker', function() {
  cy.get('#executive_team > .container > .Grid > .grid-container > :nth-child(2) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Kurt Hemecker')
    .should('be.visible')
  cy.contains('Head of Business Development')
    .should('be.visible')
  cy.contains('Kurt is a seasoned builder and manager of global business relationships across payments, mobile technology, and fintech industries.')
    .should('be.visible')

    })

    //Dante Disparte
  it('Dante_Disparte', function() {
  cy.get('#executive_team > .container > .Grid > .grid-container > :nth-child(3) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Dante Disparte')
    .should('be.visible')
  cy.contains('Head of Policy and Communications')
    .should('be.visible')
  cy.contains('An entrepreneur, business leader, and global risk advisor, Dante is deeply involved at the intersection of blockchain and digital transformation.')
    .should('be.visible')

    })

    //Michael Engle
  it('Michael_Engle', function() {
  cy.get('#executive_team > .container > .Grid > .grid-container > :nth-child(4) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Michael Engle')
    .should('be.visible')
  cy.contains('Head of Developer Platform')
    .should('be.visible')
  cy.contains('Michael has built and scaled ecosystems that enable thousands of developers to build innovative businesses on leading digital platforms.')
    .should('be.visible')

    })

    //Validate The Board of Directors
  it('board_of_directors', function() {
  cy.contains('The Board of Directors')
    .should('be.visible')
    .click()
  cy.get('#board_of_directors')
    .should('be.visible')
  cy.contains('The Board of Directors is comprised of five members. The board is charged with carrying out day-to-day management and representation of the Association.')
    .should('be.visible')

    })

  //Wences Cesares
  it('Wences_Cesares', function() {
  cy.get('#board_of_directors > .container > .Grid > .grid-container > :nth-child(1) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Wences Casares')
    .should('be.visible')
  cy.contains('CEO of Xapo')
    .should('be.visible')
  cy.contains('Wences is a technology and finance entrepreneur who believes that cryptocurrencies could revolutionize the world.')
    .should('be.visible')

    })

  //Matthew Davie
  it('Matthew_Davie', function() {
  cy.get('#board_of_directors > .container > .Grid > .grid-container > :nth-child(2) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Matthew Davie')
    .should('be.visible')
  cy.contains('CSO of Kiva Microfunds')
    .should('be.visible')
  cy.contains('With a career focused on furthering financial inclusion, Matthew leverages emerging technologies for vulnerable populations around the world.')
    .should('be.visible')

    })

  //Patrick Ellis
  it('Patrick_Ellis', function() {
  cy.get('#board_of_directors > .container > .Grid > .grid-container > :nth-child(3) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Patrick Ellis')
    .should('be.visible')
  cy.contains('General Counsel of PayU')
    .should('be.visible')
  cy.contains('Patrick has worked predominantly in the banking and finance sector, with deep experience in fintech, payments, and their potential to build a world without financial borders.')
    .should('be.visible')

    })

  //Katie Haun
  it('Katie_Haun', function() {
  cy.get('#board_of_directors > .container > .Grid > .grid-container > :nth-child(4) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Katie Haun')
    .should('be.visible')
  cy.contains('General Partner of Andreessen Horowitz')
    .should('be.visible')
  cy.contains('An expert on the intersection of technology and regulation, Katie advances responsible innovation, helping crypto projects and regulators take a forward-looking approach.')
    .should('be.visible')

    })

  //David Marcus
  it('David_Marcus', function() {
  cy.get('#board_of_directors > .container > .Grid > .grid-container > :nth-child(5) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('David Marcus')
    .should('be.visible')
  cy.contains('Head of Novi')
    .should('be.visible')
  cy.contains('David is a lifelong entrepreneur who believes blockchain technology will create better and more accessible financial services that work for everyone.')
    .should('be.visible')

    })


    //Validate The Technical Steering Committee
  it('technical_steering_committee', function() {
  cy.contains('The Technical Steering Committee')
    .should('be.visible')
    .click()
  cy.get('#technical_steering_committee')
    .should('be.visible')

  cy.contains('Appointed by the Council, the Technical Steering Committee (TSC) is comprised of representatives from five Member organizations, tasked with overseeing and coordinating the technical design and development of the Libra network.')
    .should('be.visible')

    })

//Validate The Members
  it('members', function() {
  cy.contains('The Members')
    .should('be.visible')
    .click()
  cy.get('#the_members')
    .should('be.visible')

    })

  // George Cabrera III
  it('George Cabrera III', function() {
  cy.get('#technical_steering_committee > .container > .Grid > .grid-container > :nth-child(1) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')
  cy.contains('Libra Core Product Lead of Novi')
    .should('be.visible')
  cy.contains('As Novi’s most senior Technical Product Manager and the product lead for the Libra testnet, George brings a broad and deep understanding of the Libra Blockchain to his role in governance.')
    .should('be.visible')

    })

  // Nick Grossman
  it('Nick Grossman', function() {
  cy.get('#technical_steering_committee > .container > .Grid > .grid-container > :nth-child(2) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')

    })

  // Joe Lallouz
  it('Joe Lallouz', function() {
  cy.get('#technical_steering_committee > .container > .Grid > .grid-container > :nth-child(3) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')

    })


  // Diogo Monica
  it('Diogo Monica', function() {
  cy.get('#technical_steering_committee > .container > .Grid > .grid-container > :nth-child(4) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')

    })

  //Ric Shreves
  it('Ric Shreves', function() {
  cy.get('#technical_steering_committee > .container > .Grid > .grid-container > :nth-child(5) > .TeamGridItem > .photo-container > .photo')
    .should('be.visible')

    })


    //validate page header
  it('libra_association', function() {
  cy.contains('The Libra Association')
    .should('be.visible')
  cy.contains('The Libra Association is an independent membership organization, headquartered in Geneva, Switzerland.')
    .should('be.visible')

    })

  //validate Open Source, Scalable, Secure Using Scroll
  it('open_scale_scroll', function() {
  //icon
  cy.get('.wrapper > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  //header
  cy.contains('Open Source').trigger('dummy-event')
    .should('be.visible')
  //text
  cy.contains('Fostering an open-source community to spur the development of a robust network of financial products and services to help people access and use the Libra payment system.')
    .should('be.visible')

    })

    //icon
  it('Scalable', function() {
  cy.get('.wrapper > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
    //header
  cy.contains('Scalable')
    .should('be.visible')
  //text
  cy.contains('Growing the network by adding more validator nodes and coordinating the technical roadmap among the validator nodes.')
    .should('be.visible')

    })


  //icon
  it('Secure_Using_Scroll', function() {
  cy.get('.wrapper > .Grid > .grid-container > :nth-child(1) > .IconGridItem > .icon-container > .icon')
    .should('be.visible')
  //header
  cy.contains('Secure')
    .should('be.visible')
  //text
  cy.contains('Facilitating the provision of services in the Libra payment system in a safe and compliant manner.')
    .should('be.visible')

    })

  // validate role
  //Icon
  it('role', function() {
  cy.get('.zig-zag-items-container > :nth-child(1) > .icon')
    .should('be.visible')
  //text
  cy.contains('Role')
    .should('be.visible')
  cy.contains('The Association is responsible for the governance of the Libra network and the development of the Libra project.')
    .should('be.visible')

    })

  //validate organization
  it('organization', function() {
  //Icon
  cy.get(':nth-child(2) > .icon')
    .should('be.visible')
  //text
  cy.contains('Organization')
    .should('be.visible')
  cy.contains('The Association is governed by the Libra Association Council, which is comprised of one representative per Association Member.')
    .should('be.visible')
    })
})
