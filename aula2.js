const http = require('http')

http.createServer((request, response)=>{
    //Os parametro da função são requisição e resposta(não precisa estar em inglês)

    response.writeHead(200,{
        'Content-Type':'text/plain'
    })
    //Content-Type = é o tipo de conteúdo de resposta
    //text/plain = é um texto simples

    response.write('Marcio Alex\n Aulas de Node')
    //Aqui é a resposta que vai ser impressa
    
    response.end()
    //Finaliza a resposta

}).listen(1337)
//A porta que vai ser escutada