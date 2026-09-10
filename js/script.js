// Los radios para seleccionar los valores de la propina
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
let tipInput = document.getElementById("customTip");
// Boton para el reset
const resetButton = document.getElementById("resetButton")
// El valor de la propina
let tip = 0.0;
// El valor de la propina por persona
let tipPerPerson = 0.0;
// El costo de cuanto tiene que pagar cada quien con la propina incluida
let totalPerPerson = 0.0;


    // Dependiendo de cual opción esta seleccionada, cambiara el valor del tip
    button1.addEventListener("click", (e) => { tip = .5; tipInput.value = ""; });
    button2.addEventListener("click", (e) => { tip = .10; tipInput.value = ""; });
    button3.addEventListener("click", (e) =>{ tip = .15; tipInput.value = ""; });
    button4.addEventListener("click", (e) =>{ tip = .25; tipInput.value = ""; });
    button5.addEventListener("click", (e) =>{ tip = .50; tipInput.value = ""; });

    // La siguiente opcion es para el radio con la propina custom
    tipInput.addEventListener("input", (e) => {
        tipInput.style.display = "inline.block";
        tip = (parseFloat(tipInput.value) || 0) / 100.0;
    });

// Calcular la propina ya teniendo los valores
function updateData(){
    // El costo original
    const costInput = parseFloat(document.getElementById("cost").value);
    // El numero de personas
    const numberOfPeopleInput = parseFloat(document.getElementById("number-of-people").value);

    if(costInput > 0 && numberOfPeopleInput > 0 && tip > 0){
        tipPerPerson = (costInput*tip)/numberOfPeopleInput;
        totalPerPerson = (costInput + (costInput*tip))/numberOfPeopleInput;
        // Integrar los valores al html
        document.getElementById("tipAmountPerPerson").innerHTML = "$" + tipPerPerson;
        document.getElementById("totalPerPerson").innerHTML = "$" + totalPerPerson;
    }
}
// Definir el intervalo para que se se repita la funcion
const repeatingFunctions = setInterval(updateData, 200);

    // Resetear todos los valores al presionar el boton de RESET
    resetButton.addEventListener("click", (e) => { location.reload(); });

