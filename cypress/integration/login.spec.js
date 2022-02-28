
/// <reference types="cypress" />
describe("login test", () => {
    it("visit gallery page", () => {
        cy.visit("/");
    });
    it ("click on the login button", () => {
    cy.visit("/");
    //cy.get('a[href="/login"]').click();
    cy.get('.nav-link').eq(1).click();
    cy.get('#email').type('zxcv@zxcv.com');
    cy.get('#password').type('zxcvzxcvzxcv123');
    cy.get('button').click();
    });

    it('lo', ()=>{
        // logout
    cy.get('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(3).click();
    });

});

