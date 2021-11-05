# Desafio técnico Trybe - Lista de Tarefas

Este desafio técnico teve como obetivo, desenvolver uma aplicação com integração entre aplicação Front-end e Back-end de uma lista de tarefas para uma empresa fictícia chamada "Ebytr". Para isso seria necessário o desenvolvimento de uma API utilizando express com padrão RESTful e arquitetura MSC, banco de dados em MongoDB e Front-end em ReactJS.

## Back-end

A aplicação foi criada em padrão RESTful, seguindo a arquitetura MSC. O Banco de dados utilizado foi o MongoDB. Para validações foi utilizado o framework Joi (https://www.npmjs.com/package/joi)

## Endpoints

Para criar uma tarefa, utilize o seguinte endereço: "http://localhost:3000/task" O corpo da tarefa deve estar no seguinte padrão:

{
"task": "tarefa",
"taskStatus": "status da tarefa"
}

Sendo o status da tarefa:
completed para tarefas completadas;
in-progess para tarefas em execução;
pending para tarefas não executadas;

## Front-end
Em desenvolvimento

Obs.: A integração entre o Front-end e o Back-end ainda não está implementada. Mas para tal função será utilizado o framwork Axios (https://www.npmjs.com/package/axios).

## Testes unitários
Em benefício do tempo para este desafio, não foram desenvolvidos testes unitários. Mas para o Back-end, foram instalados: Mocha, Sinon e Chai. Para o Front-end, os testes unitários seriam desenvolvidos com o React Teesting Library.
