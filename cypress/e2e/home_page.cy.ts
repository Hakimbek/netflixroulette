describe("The Home Page", () => {
  it("search movie and click movie card then click Magnifier button", () => {
    const searchParam = "Puss in Boots";
    cy.visit("/");
    cy.get("input").should("have.value", "");
    cy.get("input").type(searchParam);
    cy.get("input").should("have.value", searchParam);
    cy.get("button[type=submit]").should("have.text", "Search").click();
    cy.url().should(
      "include",
      "search?sortBy=release_date&searchQuery=Puss+in+Boots"
    );
    cy.get("[movieCardTitle]").should("have.text", searchParam);
    cy.get(`img[alt='${searchParam}']`).click();
    cy.get("[movieDetailsTitle]").should("have.text", searchParam);
    cy.get("img[alt=Magnifier]").click();
  });
});
