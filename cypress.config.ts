import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Puedes agregar otros eventos de Cypress aquí si es necesario
      return config;
    },
    specPattern: "cypress/e2e/**/*.{cy.ts,cy.js}", // Eliminado .feature
    baseUrl: "http://localhost:3000",
    supportFile: path.resolve(__dirname, "cypress/support/e2e.ts"),
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
