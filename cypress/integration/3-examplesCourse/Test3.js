/// <reference types="Cypress" />

describe('First test suite', function() {

    it('mi first test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);

        //Static dropdowns
        cy.get('select').select('option2').should('have.value', 'option2');

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India") {
                $el.click();
            }
        });
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'India');

        //visible invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked');
    });

});