// <reference types="cypress" />

describe("Registro de Usuário", () => {
  it("Deve permitir que um usuário se registre com dados válidos", () => {
    const timestamp = new Date().getTime();
    const email = `joao.silva${timestamp}@example.com`;

    cy.visit("https://automationexercise.com");
    cy.contains("Signup / Login").click();
    cy.get('input[data-qa="signup-name"]').type("João Silva");
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('input[data-qa="password"]').type("Senha@123");
    cy.get('input[data-qa="first_name"]').type("João");
    cy.get('input[data-qa="last_name"]').type("Silva");
    cy.get('input[data-qa="address"]').type("Rua Exemplo, 123");
    cy.get('input[data-qa="state"]').type("SP");
    cy.get('input[data-qa="city"]').type("São Paulo");
    cy.get('input[data-qa="zipcode"]').type("12345678");
    cy.get('input[data-qa="mobile_number"]').type("11999999999");
    cy.get('button[data-qa="create-account"]').click();
    cy.contains("Account Created!").should("be.visible");
  });
});
