import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

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

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// Parametros nomeados para URL Stateful
// http://localhost:3333/users?userId=1

// Route Parameters: Identificação de recurso
// GET http://localhost:3333/users/1
// DELETE http://localhost:3333/users/1

// Request Body: Envio de informações de um formulário (HTTPS)

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);

    req.params = { ...routeParams.groups };

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333);
