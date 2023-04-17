class Login{
    visit(){
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    }

    submit(){
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    }

}