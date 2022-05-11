/*
    NodeJS - require
    ECMAScript (JS) - import
*/
const http = require("http");

http.createServer(function(request, response) {

    if (request.url === "/usuarios") {
        if (request.method === "GET") {
            response.write("Listando usuários.");
        } else if (request.method === "POST") {
            response.write("Criar usuários.");
        }
    } else if (request.url === "/funcionarios") {
        response.write("Listando funcionários.");
    } else {
        response.write("<h1>Rota não encontrada.</h1>");
    }

    response.end();
    
}).listen(5000);