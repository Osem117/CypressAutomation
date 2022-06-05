/// <reference types="Cypress" />

describe('First test suite', function() {

    it('mi first test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Mouse Over
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');

    });

});