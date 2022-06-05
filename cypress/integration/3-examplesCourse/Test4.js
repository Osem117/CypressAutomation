/// <reference types="Cypress" />

describe('First test suite', function() {

    it('mi first test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Ckeckboxes
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        //window alert
        cy.on('window:alert', (str) => {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        // links that opens on new tabs -> invoke. 
        // Use Jquery function to remove attribute (target in this case)

        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.url().should('include', 'rahulshettyacademy');

        //navigating using browser controls
        cy.go('back');
    });

});