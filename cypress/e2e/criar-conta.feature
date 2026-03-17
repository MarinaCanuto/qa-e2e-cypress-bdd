#language: pt

Funcionalidade: Criar conta de usuário
    Como um usuário novo do sistema Hub de leitura 
    Quero criar minha conta
    Para que eu possa acessar o sistema
@only
Cenário: Criar conta com sucesso preenchendo os campos obrigatórios
    Dado que eu acesso a página de login
    Quando eu clico em Criar Conta
    Entao a página de cadastro deve ser exibida
    E eu preencho os campos obrigatórios
    E clico no botão Criar Conta
    Entao a conta deve ser criada com sucesso