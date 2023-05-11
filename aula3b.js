
//Esse servidor vai retornar os nomes das rotas na view

const http = require('http');
const url = require('url');
//inicia a requisição HTTP

const porta = 3000;
//configura a porta

const host = '127.0.0.1';
//configura o host (pode usar qualquer host)

const servidor = http.createServer((req,res)=>{
    //o parametro req vai receber o conteudo da url
    //o parametro res vai emitir a resposta
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);

    const p=url.parse(req.url,true).query
    //Consultar os parametro da url

    res.write('<br>' + p.nome );
    //Vai caprutar a atribuição que for dada a nome
    res.write('<br>' + p.curso );
    //Vai caprutar a atribuição que for dada a nome

    res.end();

})

servidor.listen(porta, ()=>{
    console.log('Servidor Rodando')
})

