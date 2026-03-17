            #language: pt

            Funcionalidade: Administração de livros Hub de Leitura
            Como administrador do sistemaQuero adicionar, editar e remover múltiplos livros de uma só vez
            Para que eu possa gerenciar o catálogo de forma rápida e eficiente

            Cenário: Adicionar novos livros com tabela de exemplos
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono novos livros com os seguintes dados:
            | titulo            | autor            | categoria | exemplares |
            | Livros de teste 1 | Autor de teste 1 | Aventura  | 2          |
            | Livros de teste 2 | Autor de teste 2 | Infantil  | 30         |
            | Livros de teste 3 | Autor de teste 3 | Romance   | 200        |
            | Livros de teste 4 | Autor de teste 4 | Ficção    | 300        |
            Entao deve aparecer uma mensagem: "Livro adicionado com sucesso!"

         
            Esquema do Cenário: Adicionar livros usando esquema do cenário - Livro: "<titulo>"
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono um livro com "<titulo>", "<autor>", "<categoria>" e "<exemplares>"
            Entao deve aparecer uma mensagem: "Livro adicionado com sucesso!"

            Exemplos:
            | titulo                            | autor                       | categoria  | exemplares |
            | Livros de teste com nome grande 1 | Autor de teste 1            | Aventura   | 3          |
            | Livros de teste 2                 | Autor de teste 2            | Tecnologia | 75         |
            | Livros de teste 3                 | Autor de com nome grande  3 | Romance    | 704        |
            | Livros de teste 4                 | A                           | Infantil   | 3009       |
