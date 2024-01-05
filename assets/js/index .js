// capturar evento de submit do formulario 
//resultado.appendChild(p); // appenChild pra  inserir um elemento da variavel p no filho na div 
const form =  document.querySelector('#formulario');

 form.addEventListener('submit', function(e){ // escutador de evento  do formulario, que p evento de submit.

    e.preventDefault();// parei o envio de formulário.
    const inputPeso = e.target.querySelector('#peso'); // pegamos os dados dos inputs 
    //console.log(inputPeso); verificar se estamos pegando os dados.
    const inputAltura = e.target.querySelector('#altura'); // pegamos os dados dos inputs  
    //console.log(inputAltura);// verificando se estou selecionando o elemento html
    const peso = Number(inputPeso.value); // criando uma variável pra receber os dados dos inputs e  convertendo pra number.
    const altura = Number(inputAltura.value);
    //console.log(peso,altura)// conferindo se os dados foram pegos. 

    if(!peso){ // se foi convertido pra number, se diferente diferente de  peso retorna peso invalido e para no return.
      setResultado('peso invalido ', false);
      return;
    }
    
    if(!altura){
      setResultado('Altura invalida ', false);// peso valido(relacionado ao parametro msg), false( a isvalid)
      return; // se encontrar algo inválido vai parar de executar o código. 
    }
    
    const imc = getImc(peso,altura); // criamos uma variavel pra receber os valores da funcão imc. 
    const NivelImc = getNivelImc(imc);// criamos uma variavel pra receber os valores da funcão NivelImc. 
    const msg = `Seu IMC é ${imc} (${NivelImc}).`;// criamos a mensagem.
    setResultado(msg, true);

 });
 function getNivelImc(imc){ // criamos  um array que e uma lista de coisa nesse caso de strings com valores . 
   const nivel = ['Abaixo do peso', 'Peso Normal',' Sobrepeso', 'obesidade grau1', 'obesidade grau2','obesidade grau3'];
    if(imc >= 39.9){
      return nivel[5];
     } if (imc >= 34.9){
         return nivel[4];
      }
       if (imc >= 29.9){
         return nivel[3];
      }
       if (imc >= 24.9){
         return nivel[2];
      }
       if (imc >= 18.5){
         return nivel[1];
      }
       if (imc < 18.5){
         return nivel[0];
      }

    }

 
 function getImc(peso,altura){ // criamos uma função pra fazer o calculo do imc e chamamos ela no parametro global 
 const imc = peso / altura ** 2;
 return imc.toFixed(2);
  
 }


 function criaP(){
   const p = document.createElement('p');// criando uma variável p que recebe a criação de um paragráfo.
    return p;           
   
  
 }

 function setResultado(msg, isValid){ //selecionar class id no html criado pra adicionar alguma coisa dentro da div resultado do html.  
   const resultado = document.querySelector('#resultado');
   resultado.innerHTML = ''; // limpando   o reusltado do html na div 
   const p = criaP();
   if (isValid){
      p.classList.add('paragrafo-resultado');
   } else {
      p.classList.add('bad');
   }
   p.innerHTML = msg,isValid ;
   resultado.appendChild(p);   
   
 }