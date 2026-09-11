// Referencias DOM
const costInputElement = document.getElementById("cost");
const numberOfPeopleInputElement = document.getElementById("number-of-people");
const customTipInput = document.getElementById("customTip");
const resetButton = document.getElementById("resetButton");
const tipButtons = document.querySelectorAll(".tip-btn");

let tip = 0.0;

// Función para permitir solo entrada numérica en los inputs
function sanitizeInput(input, allowDecimal = true) {
  input.addEventListener("input", (e) => {
    let val = e.target.value;
    if (allowDecimal) {
      val = val.replace(/[^0-9.]/g, "");
      const parts = val.split(".");
      if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
    } else {
      val = val.replace(/[^0-9]/g, "");
    }
    e.target.value = val;
    checkResetState();
  });
}

sanitizeInput(costInputElement, true);
sanitizeInput(numberOfPeopleInputElement, false);
sanitizeInput(customTipInput, true);

// Manejo de clicks en botones de propina
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remover clase activa de todos los botones
    tipButtons.forEach((btn) => btn.classList.remove("active-tip"));
    
    // Asignar clase activa al botón presionado
    e.target.classList.add("active-tip");
    
    // Obtener el porcentaje
    tip = parseFloat(e.target.getAttribute("data-tip"));
    
    // Limpiar campo custom
    if (customTipInput) customTipInput.value = "";
    
    checkResetState();
  });
});

// Manejo del input Custom
if (customTipInput) {
  customTipInput.addEventListener("input", (e) => {
    // Apagar todos los botones fijos
    tipButtons.forEach((btn) => btn.classList.remove("active-tip"));
    
    const customValue = parseFloat(e.target.value);
    if (!isNaN(customValue) && customValue >= 0) {
      tip = customValue / 100.0;
    } else {
      tip = 0.0;
    }
    checkResetState();
  });
}

// Comprobar estado del botón RESET
function checkResetState() {
  const hasCost = costInputElement.value.trim() !== "";
  const hasPeople = numberOfPeopleInputElement.value.trim() !== "";
  const hasCustomTip = customTipInput.value.trim() !== "";
  const hasActiveTipBtn = document.querySelector(".tip-btn.active-tip") !== null;

  if (hasCost || hasPeople || hasCustomTip || hasActiveTipBtn) {
    resetButton.classList.add("has-data");
  } else {
    resetButton.classList.remove("has-data");
  }
}

// Función principal de cálculo
function updateData() {
  const costInput = parseFloat(costInputElement.value);
  const numberOfPeopleInput = parseFloat(numberOfPeopleInputElement.value);

  if (!isNaN(costInput) && costInput > 0 && !isNaN(numberOfPeopleInput) && numberOfPeopleInput > 0) {
    const tipPerPerson = (costInput * tip) / numberOfPeopleInput;
    const totalPerPerson = (costInput + (costInput * tip)) / numberOfPeopleInput;

    document.getElementById("tipAmountPerPerson").innerText = "$" + tipPerPerson.toFixed(2);
    document.getElementById("totalPerPerson").innerText = "$" + totalPerPerson.toFixed(2);
  } else {
    document.getElementById("tipAmountPerPerson").innerText = "$0.00";
    document.getElementById("totalPerPerson").innerText = "$0.00";
  }
}

// Bucle de actualización continua
setInterval(updateData, 200);

// Función Reset
if (resetButton) {
  resetButton.addEventListener("click", () => {
    costInputElement.value = "";
    numberOfPeopleInputElement.value = "";
    customTipInput.value = "";
    tip = 0.0;
    tipButtons.forEach((btn) => btn.classList.remove("active-tip"));
    checkResetState();
  });
}