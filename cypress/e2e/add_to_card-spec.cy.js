// <reference types="cypress" />

describe("Adição de Produto ao Carrinho", () => {
  it("TC-1 Deve permitir adicionar um produto ao carrinho", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Products").click();
    cy.get('a[href="/product_details/1"]').click();
    cy.get('.btn.btn-default.cart').click()
    cy.contains("View Cart").click();
    cy.contains("Shopping Cart").should("be.visible");
    cy.contains("Blue Top").should("be.visible");
  });
});
