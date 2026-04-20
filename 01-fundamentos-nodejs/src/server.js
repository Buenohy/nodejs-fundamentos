import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { json } from './middlewares/json.js';
import { Database } from './database.js';

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
// - Método HTTP
// - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// GET /users => Buscando usuários no back-end
// POST /users => Criar um usuário no back-end

// Stateful - Salva os dados em memória
// Stateless - Salva os dados no banco

// JSON - JavaScript Objet Notation

// Cabeçalhos (Requisição/Resposta) => Metadados

// HTTP Status Code

// UUID => Unique Universal ID

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === 'GET' && url === '/users') {
    const users = database.select('users');

    return res.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    database.insert('users', user);

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
