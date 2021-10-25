function validaArray(arr,num){
try{
   if(!arr && !num) throw new ReferenceError("Envie os parametros");
  
  if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
  
   if(typeof arr !== 'number') throw new TypeError("Array precisa ser do tipo number");
  
  if(arr.length !== num) throw new RangeError ('Tamanho invalido');
  
  return arr;
}
  catch(e){
    if(e insanceof ReferenceError){
     console.log("Este erro é mais um ReferenceError") 
     console.log(e.message)
    } else if (e message)
    } else if (e insanceof TypeError){
     console.log("Este erro é mais um TypeError!") 
     console.log(e.message)
    } else if (e insanceof RangeError){
     console.log("Este erro é mais um RangeError") 
     console.log(e.message)
    }else{
      console.log("Tipo de erro não esperado:" + e);
    }
  }
}

console.log(validaArray());
