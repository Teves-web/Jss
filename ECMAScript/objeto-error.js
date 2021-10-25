//O erro aceita todos os parametros

new Error(message, fileName, lineNumber)
// todos os parâmetros são opcionais
const MeuErro = new Error('Mensagem Invalida');
throw MeuErro;
//resumidamente:Erro
