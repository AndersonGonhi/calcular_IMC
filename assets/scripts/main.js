const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const btn = document.querySelector('button')
const resultado = document.querySelector('.resultado')
const input = document.querySelectorAll('.peso','.altura')

function info(calculo){
      if(calculo < 18.5){
        return 'abaixo do peso'
      }else if(calculo > 18.5 && calculo < 24.9){
        return 'Peso normal'
      }else if(calculo > 25 && calculo <29.9){
        return 'Sobrepeso'
      }else if(calculo > 30 && calculo <34.9){
        return 'Obesidade grau 1'
      }else if(calculo > 35 && calculo <39.9){
        return 'Obesidade grau 2'
      }else{
        return 'Obesidade grau 3'
      }
}

document.querySelectorAll('input').forEach(input =>{
  input.addEventListener('keypress', (e)=>{
  if(/[\d,.]/g.test(e.key)){
    return
  }else{
    e.preventDefault()
  } 
});
})


btn.addEventListener('click', (e) => {
    e.preventDefault(); 

  let pesoFormatado = peso.value.replace(/[,]/g,'.')
  let alturaFormatado = altura.value.replace(/[,]/g,'.')

    let calculo = pesoFormatado / (alturaFormatado**2)
        calculo = calculo.toFixed(2)
  console.log(calculo)

        if(calculo > 0 ){
          resultado.innerHTML = 
          `<div class="result"> 
              <h3>Seu IMC é ${calculo} ( ${info(calculo)} )</h3>
            </div>`
        }else
          resultado.innerHTML = 
          `<div style="background-color:red;" class="result"> 
              <h3>Calculo Inválido</h3>
            </div>`            
}) 



