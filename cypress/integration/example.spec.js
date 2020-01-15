describe("Storybook", () => {
  before(() => {
    cy.visit("/");
  });

  it("should run test", () => {
    cy.get("#storybook-preview-iframe").should("exist");
  });
});
