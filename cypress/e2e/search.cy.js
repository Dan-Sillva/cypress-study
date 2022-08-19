describe('staring a google search', () => {
    it('searching for nodejs on google', () => {
        cy.visit('https://google.com');
        
        // get for class
        // cy.get('.gLFyf').type('nodejs')

        // get for id
        // cy.get('#id').type('nodejs')

        // get for atribute
        cy.get('[name="q"]').type('nodejs')

        // geting search button and clicking on it      
        cy.get('.CqAVzb > center > .gNO89b').click()

        // geting title page and compared with expected
        cy.title().should('eq', 'nodejs - Pesquisa Google')
    });
});