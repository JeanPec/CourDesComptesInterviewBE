const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require('json-server-auth');
const router = jsonServer.router("db.json", { routes: './routes.json' });
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port);