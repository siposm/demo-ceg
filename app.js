"use strict"

async function getData() {
    let resp = await fetch("https://siposm.hu/developerAPI/getDevelopers")
    let data = await resp.json()
    
    data.forEach(element => {
        let t = document.querySelector("#target")
        let p = document.createElement("p")
        p.textContent = element.name
        t.appendChild(p)
    })
}

getData()