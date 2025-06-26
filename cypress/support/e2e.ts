// cypress/support/e2e.ts

// Manejar errores no controlados para evitar que Cypress falle
Cypress.on("uncaught:exception", (err) => {
  console.error("Error no controlado:", err);
  return false; // Evita que Cypress falle por errores en la aplicación
});
