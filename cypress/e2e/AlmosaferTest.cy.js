/// <reference types= "cypress" />
const ExpectedCurrency ="SAR"
describe('Aspire Test Cases', () => {
  it.skip('Chech the Currency is SAR', () => {
    cy.visit('https://ae.almosafer.com/en')
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',ExpectedCurrency)
  })
it('Check the language of the website', () => {
  cy.visit('https://ae.almosafer.com/en')
  cy.get('html').should('have.attr','lang','en')

});


})