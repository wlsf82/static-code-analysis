describe('Sauce Demo', () => {
  it('successfully logs in', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').type(Cypress.env('SAUCEDEMO_USER'))
    cy.get('[data-test="password"]').type(Cypress.env('SAUCEDEMO_PWD'), { log: false })
    cy.get('[data-test="login-button"').click()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
  })
})
