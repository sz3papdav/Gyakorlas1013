let szavak = [];

function mentes() {
    let inputElem = document.getElementById("szoveg");
    let szo = inputElem.value.trim();

    if (szo !== "") {
        if (!szavak.includes(szo)) {
            szavak.push(szo);
            
            let szavakElem = document.getElementById("szavak");
            let ujNégyzet = document.createElement("div");
            ujNégyzet.className = "kor";
            ujNégyzet.innerText = szo;
            szavakElem.appendChild(ujNégyzet);
            
            inputElem.value = ""; 
        } else {
            alert("Ez a szó már szerepel a listában!");
            inputElem.value = ""; 
        }
    } else {
        alert("Kérlek írj be egy szót!");
    }
}