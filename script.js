const body = document.querySelector(".body");

body.style = "display: flex ; align-items: center ; flex-direction: column";

for (let i = 0 ; i < 16 ; i++){
    const div = document.createElement("div");
    div.className = `div${i}`
    div.style.display = "flex";

    for ( let b = 0 ; b < 16; b++){
        const subdiv = document.createElement("div");
        subdiv.className = `subdiv${i}-${b}`;
        subdiv.textContent = "Test";
        subdiv.style.padding = "10px";
        div.appendChild(subdiv)
    }

    body.appendChild(div)
}
    