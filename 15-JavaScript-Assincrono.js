//Definição -> Assíncrono -> "Que não ocorre ou não se efetiva ao mesmo tempo"

//O JavaScript roda de maneira síncrona

//Promises (promessa) (não sabe o valor) -> Objeto de processamento assíncrono; -> Inicialmente seu valor é desconhecido. Ela pode ser, resolvida ou rejeitada
//Um promisse pode ter 3 estados -> 1= Pending; 2= Fulfilled; 3= Resjected;
//Estrutura:
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => { resolve(console.log('Resolvida!));
                                                }, 2000); });
// Manipulação:
  const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => { resolve(console.log('Resolvida!));
                                                }, 2000); });
    //fazer o que tem que fazer
    //depois vai concatenar, outra string;
    await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!' )
            .catch((err) => console.log(err.message));
    //Após 2 segundos, retornara o valor
    //"Resolvida passando pelo then e agora acabou!"
    
    // Async/Await: Funções assíncronas precisam dessas duas palavras chave; -> também retornam Promises;
    
