//import cypress
import * as cypress from 'cypress'

//test suite that checks if the language is changed clicking on the flag icon in the footer
describe('Language', () => {
  it('should change language', () => {
    //open the website
    cy.visit('http://localhost:3000/')
    //check if the language is English
    cy.contains('Home').should('be.visible')
    //click on the flag icon
    cy.get('.flag-icon-gb').click()
    //check if the language is Italian
    cy.contains('Home').should('be.visible')
  })
})
