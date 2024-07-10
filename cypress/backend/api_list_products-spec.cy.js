// <reference types="cypress" />

describe("API Test - Lista de Produtos", () => {
  it("Deve retornar uma lista de produtos com status 200", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("products");
      expect(response.body.products).to.be.an("array");
    });
  });
});
