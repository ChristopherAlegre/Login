async function converterMoeda() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("currency").value;
    const toCurrency = document.getElementById("targetCurrency").value;
    const resultEl = document.getElementById("conversionResult");

    if (amount >0) {
        resultEl.innerText = `O valor convertido é ${fromCurrency} ${toCurrency}`;
        return;
    }

    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
    const response = await fetch(url);
    const data = await response.json();
    const converted = data.rates[toCurrency];

    resultEl.innerText = `${amount} ${fromCurrency} = ${fromCurrency} ${toCurrency}`;
}
