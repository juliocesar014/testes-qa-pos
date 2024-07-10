// <reference types="cypress" />

describe("Finalização da Compra", () => {
  it("Deve permitir finalizar a compra com dados válidos", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Products").click();
    cy.get('a[href="/product_details/1"]').click();
    cy.get(".btn.btn-default.cart").click();
    cy.contains("View Cart").click();
    cy.contains("Proceed To Checkout").click();
    cy.get(".modal-body > :nth-child(2) > a > u").click();
    cy.get('input[data-qa="login-email"]').type("joao.silva@example.com");
    cy.get('input[data-qa="login-password"]').type("Senha@123");
    cy.get('button[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.contains("Proceed To Checkout").click();
    cy.get('.form-control').type(
      "Por favor, entregue entre 9h e 18h."
    );
    cy.get('a[href="/payment"]').click();
    cy.get('input[data-qa="name-on-card"]').type("João Silva");
    cy.get('input[data-qa="card-number"]').type("4111111111111111");
    cy.get('input[data-qa="cvc"]').type("123");
    cy.get('input[data-qa="expiry-month"]').type("12");
    cy.get('input[data-qa="expiry-year"]').type("2025");
    cy.get('button[data-qa="pay-button"]').click();
    cy.contains("Order Placed!").should("be.visible");
  });
});
