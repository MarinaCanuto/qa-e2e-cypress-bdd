// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, senha) => { 
    cy.visit('login.html')
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#login-btn').click()
    cy.contains('h1', 'Painel Administrativo').should('be.visible')
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('adicionarLivro', (titulo, autor, categoria, copias) =>{
    cy.get('.btn-success').click()
    cy.get('#book-title').clear().type(titulo, {force: true})
    cy.get('#book-author').clear().type(autor)
    cy.get('#book-category').select(categoria)
    cy.get('#book-copies').clear().type(copias)
    cy.get('#save-book-btn').click()
})

Cypress.Commands.add('preencherCadastro', () => {
  const nome = `usuario${Date.now()}`
  const email = `usuario${Date.now()}@teste.com`
  const senha = 'Senha@123'

  cy.get('#name').type(nome)
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('#confirm-password').type(senha)
  cy.get('.form-check').click()
})
