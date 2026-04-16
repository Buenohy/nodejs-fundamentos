import http from 'node:http';

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

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários');
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário');
  }

  return res.end('Helo World');
});

server.listen(3333);
