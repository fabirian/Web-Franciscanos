describe("Página de Noticias con Categorías y Tags", () => {
    beforeEach(() => {
      // Interceptar la API de noticias
      cy.intercept("GET", "http://localhost:1337/api/noticias?populate=*", {
        statusCode: 200,
        body: {
          data: [
            {
              id: 1,
              titulo: "Noticia de prueba",
              contenido: "Contenido de la noticia de prueba",
              categorias: [{ id: 1, Name: "Política" }],
              tags: [{ id: 1, Name: "Actualidad" }],
            },
            {
              id: 2,
              titulo: "Otra Noticia",
              contenido: "Otra noticia interesante",
              categorias: [{ id: 2, Name: "Deportes" }],
              tags: [{ id: 2, Name: "Fútbol" }],
            },
          ],
        },
      }).as("getNoticias");
  
      // Interceptar la API de categorías
      cy.intercept("GET", "http://localhost:1337/api/categorias", {
        statusCode: 200,
        body: {
          data: [
            { id: 1, Name: "Política" },
            { id: 2, Name: "Deportes" },
          ],
        },
      }).as("getCategorias");
  
      // Interceptar la API de tags
      cy.intercept("GET", "http://localhost:1337/api/tags", {
        statusCode: 200,
        body: {
          data: [
            { id: 1, Name: "Actualidad" },
            { id: 2, Name: "Fútbol" },
          ],
        },
      }).as("getTags");
  
      // Visitar la página
      cy.visit("/noticias");
    });
  
    it("Debe mostrar el título principal", () => {
      cy.contains("Noticias del mundo").should("be.visible");
    });
  
    it("Debe cargar y mostrar las noticias", () => {
      cy.wait("@getNoticias");
  
      // Validar títulos de las noticias
      cy.contains("Noticia de prueba").should("be.visible");
      cy.contains("Otra Noticia").should("be.visible");
    });
  
    it("Debe mostrar categorías en el sidebar", () => {
      cy.wait("@getCategorias");
  
      cy.contains("Categorías").should("be.visible");
      cy.contains("Política").should("be.visible");
      cy.contains("Deportes").should("be.visible");
    });
  
    it("Debe mostrar tags en el sidebar", () => {
      cy.wait("@getTags");
  
      cy.contains("Tags Populares").should("be.visible");
      cy.contains("#Actualidad").should("be.visible");
      cy.contains("#Fútbol").should("be.visible");
    });
  
    it("Debe filtrar noticias por categoría", () => {
      cy.wait("@getCategorias");
      cy.contains("Política").click();
      cy.url().should("include", "categoria=Política");
    });
  
    it("Debe filtrar noticias por tag", () => {
      cy.wait("@getTags");
      cy.contains("#Actualidad").click();
      cy.url().should("include", "tag=Actualidad");
    });
  });
  