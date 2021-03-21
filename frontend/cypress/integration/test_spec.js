describe("Cypress", function () {
  it("is working", function () {
    expect(true).to.equal(true);
  });
  it("visits the app", () => {
    cy.visit("http://localhost:3000");
  });
});
