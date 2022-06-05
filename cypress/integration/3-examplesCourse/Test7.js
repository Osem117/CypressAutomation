/// <reference types="Cypress" />

describe('First test suite', function() {

    it('mi first test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Open new tab problem handle
        // if new superdomain will not open it. If subdomain, it will
        cy.get('#opentab').then(function(el) {
            const url = el.prop('href');
            cy.log(url);
            cy.visit(url);
        });


    });

});