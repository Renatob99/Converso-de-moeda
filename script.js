const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const description = document.getElementById('description')
const amount = document.getElementById('amount')
const result = document.getElementById('result')
const form = document.querySelector('form')
const footer = document.querySelector('main footer')


amount.addEventListener("input", (e) => {
    e.preventDefault()
    
    const hasCharacterRegex = /\D+/g
    amount.value =  amount.value.replace(hasCharacterRegex, "")
    console.log(amount.value);
    


})
//Capturando o evento de submit (enviar) do formulario

form.onsubmit = (e) =>{
    e.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD,"US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP,"£")
        
        }     
}

function convertCurrency(amount, price, symbol){
   try{
      footer.classList.add("show-result")
      description.textContent = `${symbol} 1 =  ${formataCurrency(price)}`
      
      let total =  amount * price

      
      if(isNaN(total)){
        return alert("Por favor, digite o valor correto para converter.")
      }
      total = formataCurrency(total).replace("R$", "")
      
      result.textContent = `${total} Reais`

   }
   catch(error){
    footer.classList.remove("show-result")
    alert("Não foi possivel converte. tente novamnete mais  tarde")
   }
}

function formataCurrency(value){

    return Number(value).toLocaleString("pt-BR", {
        style:'currency',
        currency:'BRL'
    })

}














