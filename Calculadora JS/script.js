const display = document.querySelector(".number");
const buttons = document.querySelectorAll(".btn");

let conta = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const valor = button.textContent;

        if (valor === "C") {
            conta = "";
            display.value = "";
            return;
        }

        if (valor === "=") {
            try {
                conta = eval(conta);
                display.value = conta;
            } catch {
                display.value = "Erro";
                conta = "";
            }
            return;
        }

        const ultimoChar = conta.slice(-1);
        const operadores = ["+", "-", "*", "/"];

        if (operadores.includes(valor) && operadores.includes(ultimoChar)) {
            return;
        }

        conta += valor;
        display.value = conta;
    });
});
