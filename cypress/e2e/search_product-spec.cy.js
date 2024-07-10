// <reference types="cypress" />

describe("Pesquisa de Produto", () => {
  it("Deve permitir pesquisar um produto existente", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Products").click();
    cy.get("#search_product").type("dress");
    cy.get("#submit_search").click();
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .contains("Sleeveless Dress")
      .should("be.visible");
  });
});
