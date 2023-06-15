/*https://exchangerate.host/#/#docs

var myHeaders = new Headers();
myHeaders.append("apikey", "01aNqsBBdzN3L0DVIimOnTHh1A3MH55R");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};*/
const getCurrencyOption = async () =>{
  const response = await fetch('https://api.exchangerate.host/symbols'/*, requestOptions*/);
  const json = await response.json();
   return json.symbols;
};
//getCurrencyOption().then(console.log);
const getCurrencyRate = async (fromCurrency, toCurrency/*,amount*/) => {
const currencyConverterUrl = new URL('https://api.exchangerate.host/convert'/*, requestOptions*/);

  currencyConverterUrl.searchParams.append('from',fromCurrency);
  currencyConverterUrl.searchParams.append('to',toCurrency);
  //currencyConverterUrl.searchParams.append('amount',amount);

  const response = await fetch(currencyConverterUrl);
  const json =await response.json();
  
  return json.result;

};
const appendOptionToselect = (selectElement,optionItem) => {
  const optionElement = document.createElement('option');
  optionElement.value = optionItem.code;
  optionElement.textContent = optionItem.description;
  selectElement.appendChild(optionElement);

};
const povoarSelectElement = (selectElement, optionList)=>{
  optionList.forEach(optionItem => {
    appendOptionToselect(selectElement, optionItem) 
  })
};
const setupCurrencies = async () => {
  const fromCurrencyElem = document.getElementById('fromCurrency');
  const toCurrencyElem = document.getElementById('toCurrency');
  const currencyOptions = await getCurrencyOption();

  const currencies = Object.keys(currencyOptions).map
  (currencyKey => currencyOptions[currencyKey]);
//console.log(currencies);
  povoarSelectElement(fromCurrencyElem, currencies);
  povoarSelectElement(toCurrencyElem, currencies);
};
const setupEventoLista = () =>{
  const formElement = document.getElementById('convertForm');
  formElement.addEventListener('submit',async event =>{
    event.preventDefault();
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amount = document.getElementById('amount');
    const converterResultElem = document.getElementById('convertResult');
      const rate =  await getCurrencyRate(fromCurrency.value, toCurrency.value);
      const amountValue = Number(amount.value);
      const conversionResult = Number(amountValue * rate).toFixed(2);
      converterResultElem.textContent = `${amountValue} ${fromCurrency.value}= ${conversionResult} ${toCurrency.value}`
    
  });
};
setupCurrencies();
setupEventoLista();
/*

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const 
function hidden(ide){
  let conteudo = document.querySelector();
 conteudo.classList.toggle('ativo');

}*/

