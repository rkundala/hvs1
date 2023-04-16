


describe('User account page', () => {

    before(() => {
     // cy.login('user1', 'p4ssw0rd123')

    })
  
    it('should actually be accessible', () => {
     cy.visit('https://the-internet.herokuapp.com/upload')
    })
  
    it('should have the correct page title', () => {
    //  cy.visit('/gmail.com')
    //  cy.title().should('eq', 'Account Details for User 1')
    })
  
  })


