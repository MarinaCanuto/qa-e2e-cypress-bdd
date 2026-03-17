import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
    cy.login('admin@biblioteca.com', 'admin123')
})

Given(`que eu estou na página de administrador de livros`, () => {
    cy.visit('admin-books.html')
    cy.get('h1').should('contain', 'Gerenciar Livros') 
});

When(`eu add um novo livro com os dados obrigatorios`, () => {
    cy.adicionarLivro('Livro teste', 'Autor teste', 'Aventura', 2 )
});

Then(`deve aparecer uma mensagem: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

Given(`existe um livro listado no catalogo`, () => {
    cy.adicionarLivro('Livro para manipular', 'Autor teste', 'Aventura', 2 )
    cy.get('#search-input').type('Livro para manipular')
    cy.wait(2000)
});

When(`eu edito os detalhes do livro`, () => {
    cy.get(':nth-child(7) > .btn-outline-primary > .fas').click()
    cy.wait(1000)
    cy.get('#book-category').select('Aventura')
    cy.get('#save-book-btn').click()
});

Then(`deve aparecer uma mensagem de atualizacao: {string}`, (mensagem) => {
    cy.get('#alert-container').should('be.visible').and('contain', mensagem)
});

When('eu removo o livro do catalogo', () => {
  cy.contains('tr', 'teste').find('.btn-outline-danger').click({ force: true })

  cy.get('#confirm-delete-btn').should('be.visible').click()
})

Then(`deve aparecer uma mensagem de exclusao: {string}`, (mensagem) => {
    cy.get('#alert-container').should('be.visible').and('contain', mensagem)
});

When('eu adiciono novos livros com os seguintes dados:', (dataTable) => {
  const books = dataTable.hashes()
  books.forEach((book) => {
    cy.get('.btn-success').click()
    cy.get('#book-title').clear().type(book.titulo)
    cy.get('#book-author').clear().type(book.autor)
    cy.get('#book-category').select(book.categoria)
    cy.get('#book-copies').clear().type(String(book.exemplares))
    cy.get('#save-book-btn').click()
    cy.get('#alert-container').should('contain', 'Livro adicionado com sucesso!')
  })
})

When('eu adiciono um livro com {string}, {string}, {string} e {string}', (titulo, autor, categoria, exemplares) =>{
    cy.adicionarLivro(titulo, autor, categoria, exemplares)
} )