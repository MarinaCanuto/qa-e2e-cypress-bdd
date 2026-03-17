# language: pt

Funcionalidade: Administrar livros no Hub de Leitura
Como um administrador do sistema Hub de leitura 
Quero adicionar, editar e remover livros 
Para que eu possa manter o catalogo atualizado.

Cenário: Adicionar um novo livro
    Dado que eu estou na pagina de admin de livros
    Quando eu add um novo livro com os dados obrigatorios
    Entao deve aparecer uma mensagem: "Livro adicionado com sucesso!"

Cenário: Editar um livro existente
    Dado que eu estou na pagina de admin de livros
    E existe um livro listado no catalogo
    Quando eu edito os detalhes do livro
    Entao deve aparecer uma mensagem de atualizacao: "Livro atualizado com sucesso!"

Cenário: Remover um livro existente
    Dado que eu estou na pagina de admin de livros
    E existe um livro listado no catalogo
    Quando eu removo o livro do catalogo
    Entao deve aparecer uma mensagem de exclusao: "Livro excluído com sucesso!"