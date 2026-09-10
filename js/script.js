// El costo original
const costInput = parseFloat(document.getElementById("cost").value);
// Los radios para seleccionar los valores de la propina
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const radio5 = document.getElementById("radio5");
const radio6 = document.getElementById("radio6");
// La variable para tener el "input" de la propina custom
const customRadioInput = document.getElementById("customTip");
// El numero de personas
const numberOfPeopleInput = parseFloat(document.getElementById("number-of-people").value);
// Boton para el reset
const resetButton = document.getElementById("resetButton")
// El valor de la propina
let tip = 0.0;
// El valor de la propina por persona
let tipPerPerson = 0.0;
// El costo de cuanto tiene que pagar cada quien con la propina incluida
let totalPerPerson = 0.0;


    // Dependiendo de cual opción esta seleccionada, cambiara el valor del tip
    radio1.addEventListener("change", (e) => { if (e.target.checked) tip = .5; });
    radio2.addEventListener("change", (e) => { if (e.target.checked) tip = .10; });
    radio3.addEventListener("change", (e) =>{ if (e.target.checked) tip = .15; });
    radio4.addEventListener("change", (e) =>{ if (e.target.checked) tip = .25; });
    radio5.addEventListener("change", (e) =>{ if (e.target.checked) tip = .50; });

    // La siguiente opcion es para el radio con la propina custom
    radio6.addEventListener("change", (e) => {
       if (e.taget.checked){
        customTipInput.style.display = "inline.block";
        tip = (paseFloat(customTipInput.value) || 0) / 100.0;
       } else {
        customTipInput.style.display = "";
       }
    });

// Calcular la propina ya teniendo los valores
function updateData(){
    if(costInput > 0 && numberOfPeopleInput > 0 ){
        tipPerPerson = (costInput*tip)/numberOfPeopleInput;
        totalPerPerson = (costInput + (costInput*tip))/numberOfPeopleInput;
        // Integrar los valores al html
        document.getElementById("tipAmountPerPerson").innerHTML = "" + tipPerPerson;
        document.getElementById("totalPerPerson").innerHTML = "" + totalPerPerson;
    }
}
// Definir el intervalo para que se se repita la funcion
const repeatingFunctions = setInterval(updateData, 200);

    // Resetear todos los valores al presionar el boton de RESET
    resetButton.addEventListener("click", (e) => { location.reload(); });

