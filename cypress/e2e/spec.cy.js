// Teste da feramenta cypress
// Execução do tutorial básico de primeiro script

describe('empty spec', () => {
  it('acessando o site da nimbi', () => {
    cy.visit('https://example.cypress.io/')
    cy.contains('type').click()
  
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('faketype@mail.com')
      .should('have.value', 'faketype@mail.com')
  })
})