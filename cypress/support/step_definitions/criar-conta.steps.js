import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu acesso a página de login', () => {
  cy.visit('/login.html');
});

When('eu clico em Criar Conta', () =>{
    cy.get('[href="/register.html"]').click()          
})

Then('a página de cadastro deve ser exibida', () =>{
    cy.get('.text-5xl').should('contain','Cadastre-se no Hub de Leitura' )
})

When('eu preencho os campos obrigatórios', () =>{
    cy.get('#name').type('marina')
    cy.get('#email').type('marina@teste.com')
    cy.get('#password').type('senha@123')
    cy.get('#confirm-password').type('senha@123')
    cy.get('.form-check').click()
})

When('clico no botão Criar Conta', () =>{
    cy.get('#register-btn').click()
})

Then('a conta deve ser criada com sucesso', () => {
  cy.url().should('include', 'dashboard.html');
  cy.get('.text-xl > .text-muted').should('be.visible');
});