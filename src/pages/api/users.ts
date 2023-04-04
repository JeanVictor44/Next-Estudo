import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Jean'},
        {id: 2, name: 'Gigi'},
        {id: 3, name: 'Amora'}
    ]

    return response.json(users)
}

// Serveless

// Não existe um servidor 24h rodando, ele roda as funções por demanda
// Toda a vez que o usuário acessar uma rota ele cria uma ambiente isolado para executar essa função
// Devolve a resposta e apaga o ambiente isolado. Isso traz ganhos enormes com relação a gastos em recusos com servidores rodando 24h