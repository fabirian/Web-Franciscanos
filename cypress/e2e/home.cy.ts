describe("Página de Noticias", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:1337/api/noticias?populate=*", {
        statusCode: 200,
        body: {
          data: [
            {
              id: 1,
              title: "Noticia de prueba",
              description: "Contenido de la noticia de prueba",
              date: "2024-03-01T10:00:00.000Z",
              image: [{ url: "/uploads/noticia.jpg", name: "Imagen noticia" }],
              link: "noticia-de-prueba"
            },
          ],
        },
      }).as("getNoticias");
  
      cy.visit("/");
    });
  
    it("Debe mostrar el título principal", () => {
      cy.wait("@getNoticias");
      cy.contains("Noticias del mundo").should("be.visible");
    });
  
    it("Debe cargar y mostrar las noticias", () => {
      cy.wait("@getNoticias");
  
      cy.contains("Noticia de prueba").should("be.visible");
      cy.contains("Contenido de la noticia de prueba").should("be.visible");
      cy.contains(/1\s?MARZO\s?2024/i).should("be.visible");
      cy.get("img").should("have.attr", "src").and("include", "/uploads/noticia.jpg");
      cy.get("a[href='/noticias/noticia-de-prueba']").should("exist");
    });
  });
  