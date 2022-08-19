describe('Simple posting on twitter', () => {
    it('visit the website', () => {
        cy.visit('https://twitter.com/login');

        cy.url().should('include', '/flow/login')
    });

    it('login with a account', () => {
        let account = require('../fixtures/account.json')
        
        cy.get('.r-30o5oe').click()
        .type(account.name)

        cy.contains('Avançar')
        .click()

        cy.get('.r-vhj8yc > :nth-child(1) > .r-1wbh5a2 > .r-1nao33i > .r-30o5oe')
        .type(account.passwd)

        cy.contains('Entrar')
        .click()
    });

    it('go to the post', () => {
        let account = require('../fixtures/account.json') 
        
        cy.get('.public-DraftStyleDefault-block')
        .click()
        .type(account.post)

        cy.contains('Tweetar').click()
    });
});