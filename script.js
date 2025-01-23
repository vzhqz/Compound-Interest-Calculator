const form = document.querySelector("form");

form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        calculate();
    }
});


function calculate() {
    const principalAmount = document.getElementById("principalAmount");
    const interestRate = document.getElementById("interestRate");
    const yearsNum = document.getElementById("years");
    const resultText = document.getElementById("result");

    let principal = Number(principalAmount.value);
    let rate = Number(interestRate.value / 100);
    let years = Number(yearsNum.value);

    if(isNaN(principal) || principal < 0) {
        principal = 0;
    }
    if(isNaN(rate) || rate < 0) {
        rate = 0;
    }
    if(isNaN(years) || years < 0) {
        years = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * years);
    resultText.textContent = result.toLocaleString("en-US", {style: "currency", currency: "usd"})
}