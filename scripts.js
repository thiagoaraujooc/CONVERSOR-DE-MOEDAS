const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency") .value 

    const dolarToday = 6.0

    const convertedValue = inputCurrencyValue / dolarToday

    console.log(inputCurrencyValue)
}


convertButton.addEventListener("click" , convertValues )   