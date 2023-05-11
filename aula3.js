const { Console } = require('console');
const http = require('http');
//inicia a requisição HTTP

const porta = 3000;
//configura a porta

const host = '127.0.0.1';
//configura o host (pode usar qualquer host)

const servidor = http.createServer((req,res)=>{
    //o parametro req vai receber o conteudo da url
    //o parametro res vai emitir a resposta
    res.writeHead(200,{'Content-Type':'text/html'});

    //Abaixo tem a definição das rotas
    if(req.url=='/'){
        //A barra é a raiz
        res.write('<h1>Seja bem vindo ao site</h1>');
    }else if(req.url=='/canal'){
        res.write('<h1>Seja bem vindo ao canal</h1>');
    }else if(req.url=='/curso'){
        res.write('<h1>Seja bem vindo ao curso</h1>');
    }
    res.end();

})

servidor.listen(porta, host,()=>{
    console.log('Servidor Rodando')
})

