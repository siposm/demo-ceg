"use strict"

function add() {
    console.log("...add...")
    console.log(document.querySelector("#developer-name").value)
}

async function getData() {
    let resp = await fetch("https://siposm.hu/developerAPI/getDevelopers")
    let data = await resp.json()
    
    data.forEach(element => {
        let t = document.querySelector("#target")
        let p = document.createElement("p")
        p.textContent = element.name
        
        let btnDel = document.createElement("button")
        btnDel.textContent = "Delete"
        btnDel.addEventListener("click", () => {
            console.log("...delete...")
        })
        
        let btnEdit = document.createElement("button")
        btnEdit.textContent = "Edit"
        btnEdit.addEventListener("click", () => {
            console.log("...edit...")
        })
        
        t.appendChild(p)
        t.appendChild(btnDel)
        t.appendChild(btnEdit)
        t.appendChild(document.createElement("hr"))
    })
}

getData()