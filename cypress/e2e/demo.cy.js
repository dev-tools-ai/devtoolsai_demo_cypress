describe("GH test", () => {
  it("Should enter my_username", () => {
    cy.visit("http://www.github.com/login");
    cy.get('[name="login"]').type("my_username");
  }); 
});

describe("Duck duck go test", () => {
  it("Should prompt for search box", () => {
    cy.visit("http://www.duckduckgo.com/");
    cy.findByAI("cy_search_box").type("Hello World!");
  }); 
});
