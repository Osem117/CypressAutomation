/// <reference types="Cypress" />

describe('First test suite', function() {

    it('mi first test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // Selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5); //buscamos por tag product
        cy.get('.product:visible').should('have.length', 4); //tag pero solo elementos visibles
        // Parent child chaining
        //Alias
        cy.get('.products').as('productlocator');
        cy.get('@productlocator').find('.product').should('have.length', 4); // por parent-child
        cy.get(':nth-child(3) > .product-action > button').click(); // buscar el boton que queremos pulsar con el selector cypress 
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click(); // encontrar un boton navegando de parent a child buscando por un text que contenga el string


        //iterar por los productos y el que tenga un nombre que coincida con X hacer Y
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
        cy.get('.chkAgree').click();
        cy.contains('Proceed').click();

    });

});