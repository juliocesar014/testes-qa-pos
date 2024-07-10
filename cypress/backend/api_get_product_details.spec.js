// <reference types="cypress" />

describe("API Test - Detalhes do Produto", () => {
  it("Deve retornar os detalhes de um produto com status 200", () => {
    const productId = 1;
    cy.request({
      method: "GET",
      url: `https://automationexercise.com/api/productDetails/${productId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("product");
      expect(response.body.product).to.have.property("id", productId);
      expect(response.body.product).to.have.property("name");
      expect(response.body.product).to.have.property("price");
    });
  });
});
