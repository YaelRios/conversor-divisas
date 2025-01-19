const API_URL = "https://v6.exchangerate-api.com/v6/ba1b273119db4a8f606fe5a4/latest/USD";

document.addEventListener("DOMContentLoaded", async () => {
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    const resultDiv = document.getElementById("result");
    const swapButton = document.getElementById("swap-button");

    const data = await fetch(API_URL).then(response => response.json());
    const rates = data.conversion_rates;

    Object.keys(rates).forEach(currency => {
        fromCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
        toCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
    });

    document.getElementById("currency-form").addEventListener("submit", event => {
        event.preventDefault();
        const amount = parseFloat(document.getElementById("amount").value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || !rates[from] || !rates[to]) {
            resultDiv.textContent = "Por favor, ingrese datos válidos.";
            return;
        }

        const convertedAmount = (amount / rates[from]) * rates[to];
        resultDiv.textContent = `Resultado: ${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    });

    swapButton.addEventListener("click", () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
    });
});