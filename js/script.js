const costInput = parseFloat(document.getElementById("cost").value);
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const radio4 = document.querySelector("#radio4");
const radio5 = document.querySelector("#radio5");
const radio6 = document.querySelector("#radio6");
const customRadioInput = document.querySelector("#customTip");
const numberOfPeopleInput = parseFloat(document.getElementById("number-of-people").value);
let tip = 0.0;

function calculateTip() {
    // Dependiendo de cual opción esta seleccionada, cambiara el valor del tip
    radio1.addEventListener("change", (e) => { if (e.target.checked) tip = .5; });
    radio2.addEventListener("change", (e) => { if (e.target.checked) tip = .10; });
    radio3.addEventListener("change", (e) =>{ if (e.target.checked) tip = .15; });
    radio4.addEventListener("change", (e) =>{ if (e.target.checked) tip = .25; });
    radio5.addEventListener("change", (e) =>{ if (e.target.checked) tip = .50; });

    // La siguiente opcion es para el radio con la propina custom
    radio6.addEventListener("change", (e) => {
                
    });
};