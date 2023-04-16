describe('Example to demonstrate file download in cypress', function () {
    it('File Download using cypress-downloadfile npm package', () => {
        cy.downloadFile('https://the-internet.herokuapp.com/download/LambdaTest.txt',
            'cypress/fixtures', 'LambdaTest.txt')
      //  cy.readFile('cypress/fixtures/LambdaTest.txt').should('contain', '7ab86b3166af02d2')    
    })
})