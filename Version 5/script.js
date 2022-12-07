// Activation de la sidebar
const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    btn = body.querySelector("#btn"),
    allSideDivider=document.querySelectorAll(".sidebar .divider");

    btn.addEventListener("click",function () {
        sidebar.classList.toggle("active");
        if(sidebar.classList.contains('active')){
            allSideDivider.forEach(item=>{
                item.textContent =item.dataset.text;
            })
        }
        else{
            allSideDivider.forEach(item=> {
                item.textContent=".";
            })
        }
    })

// Activation de la fenêtre template
const modalContainerTemp = document.querySelector(".modal-container-temp");
const modalTriggersTemp = document.querySelectorAll(".modal-trigger");
modalTriggersTemp.forEach(trigger => trigger.addEventListener("click",toggleModalTemp))

function toggleModalTemp(){
    modalContainerTemp.classList.toggle("active")
}

// Activation de la fenêtre paramétre
const modalContainerParam = document.querySelector(".modal-container-param");
const modalTriggersParam = document.querySelectorAll(".modal-trigger-param");
modalTriggersParam.forEach(trigger => trigger.addEventListener("click",toggleModalParam))

function toggleModalParam(){
    modalContainerParam.classList.toggle("active")
}

// Activation et désactivation des templates suivants les choix
const modalContainerTemp1 = document.querySelector(".template-1");
const modalTriggersTemp1 = document.querySelectorAll(".temp-1-trigger");
modalTriggersTemp1.forEach(trigger => trigger.addEventListener("click",toggleModalTemp1))

function toggleModalTemp1(){
    if((window.getComputedStyle(document.getElementById("temp2"),null).getPropertyValue('display')!='none')&&(window.getComputedStyle(document.getElementById("temp3"),null).getPropertyValue('display')==='none')){
        modalContainerTemp2.classList.toggle("active")
        if(window.getComputedStyle(document.getElementById("temp1"),null).getPropertyValue('display')==='none'){
            modalContainerTemp1.classList.toggle("active")
        }
    }
    else if((window.getComputedStyle(document.getElementById("temp2"),null).getPropertyValue('display')==='none')&&(window.getComputedStyle(document.getElementById("temp3"),null).getPropertyValue('display')!='none')){
        modalContainerTemp3.classList.toggle("active")
        if(window.getComputedStyle(document.getElementById("temp1"),null).getPropertyValue('display')==='none'){
            modalContainerTemp1.classList.toggle("active")
        }
    }
    modalContainerTemp.classList.toggle("active")
}

const modalContainerTemp2 = document.querySelector(".template-2");
const modalTriggersTemp2 = document.querySelectorAll(".temp-2-trigger");
modalTriggersTemp2.forEach(trigger => trigger.addEventListener("click",toggleModalTemp2))

function toggleModalTemp2(){
    if((window.getComputedStyle(document.getElementById("temp1"),null).getPropertyValue('display')!='none')&&(window.getComputedStyle(document.getElementById("temp3"),null).getPropertyValue('display')==='none')){
        modalContainerTemp1.classList.toggle("active")
        if(window.getComputedStyle(document.getElementById("temp2"),null).getPropertyValue('display')==='none'){
            modalContainerTemp2.classList.toggle("active")
        }
    }
    else if((window.getComputedStyle(document.getElementById("temp1"),null).getPropertyValue('display')==='none')&&(window.getComputedStyle(document.getElementById("temp3"),null).getPropertyValue('display')!='none')){
        modalContainerTemp3.classList.toggle("active")
        if(window.getComputedStyle(document.getElementById("temp2"),null).getPropertyValue('display')==='none'){
            modalContainerTemp2.classList.toggle("active")
        }
    }
    modalContainerTemp.classList.toggle("active")
}

const modalContainerTemp3 = document.querySelector(".template-3");
const modalTriggersTemp3 = document.querySelectorAll(".temp-3-trigger");
modalTriggersTemp3.forEach(trigger => trigger.addEventListener("click",toggleModalTemp3))

function toggleModalTemp3(){
    if((window.getComputedStyle(document.getElementById("temp2"),null).getPropertyValue('display')!='none')&&(window.getComputedStyle(document.getElementById("temp1"),null).getPropertyValue('display')==='none')){
        modalContainerTemp2.classList.toggle("active")
        if(window.getComputedStyle(document.getElementById("temp3"),null).getPropertyValue('display')==='none'){
            modalContainerTemp3.classList.toggle("active")
        }
    }
    else if((window.getComputedStyle(document.getElementById("temp2"),null).getPropertyValue('display')==='none')&&(window.getComputedStyle(document.getElementById("temp1"),null).getPropertyValue('display')!='none')){
        modalContainerTemp1.classList.toggle("active")
        if(window.getComputedStyle(document.getElementById("temp3"),null).getPropertyValue('display')==='none'){
            modalContainerTemp3.classList.toggle("active")
        }
    }
    modalContainerTemp.classList.toggle("active")
}

// Activation de la fenêtre paramétre panneau
const modalContainerPan = document.querySelector(".modal-container-pan");
const modalTriggersPan = document.querySelectorAll(".modal-trigger-panel");
modalTriggersPan.forEach(trigger => trigger.addEventListener("click",toggleModalPan))

function toggleModalPan(){
    modalContainerPan.classList.toggle("active")
}

// Activation de l'affichage des input dans le panneau paramétre suivant le sélecteur
const serie=document.querySelector(".serie-input");
const udp=document.querySelector(".udp-input");
const tcp=document.querySelector(".tcp-input");
const link=document.querySelector(".selectl");
link.addEventListener("change",(event)=>{
    if(event.target.value === 'tcp'){
        if(window.getComputedStyle(document.getElementById("u"),null).getPropertyValue('display')!='none'){
            udp.classList.toggle("active")
        }
        if(window.getComputedStyle(document.getElementById("t"),null).getPropertyValue('display')==='none'){
            tcp.classList.toggle("active")
        }
        if(window.getComputedStyle(document.getElementById("s"),null).getPropertyValue('display')!='none'){
            serie.classList.toggle("active")
        }
    }
    else if(event.target.value === 'udp'){
        if(window.getComputedStyle(document.getElementById("u"),null).getPropertyValue('display')==='none'){
            udp.classList.toggle("active")
        }
        if(window.getComputedStyle(document.getElementById("t"),null).getPropertyValue('display')!='none'){
            tcp.classList.toggle("active")
        }
        if(window.getComputedStyle(document.getElementById("s"),null).getPropertyValue('display')!='none'){
            serie.classList.toggle("active")
        }
    }

    else if(event.target.value === 'serie'){
        if(window.getComputedStyle(document.getElementById("u"),null).getPropertyValue('display')!='none'){
            udp.classList.toggle("active")
        }
        if(window.getComputedStyle(document.getElementById("t"),null).getPropertyValue('display')!='none'){
            tcp.classList.toggle("active")
        }
        if(window.getComputedStyle(document.getElementById("s"),null).getPropertyValue('display')==='none'){
            serie.classList.toggle("active")
        }
    }
})

// Activation de la fenêtre choix des données
const modalContainerData = document.querySelector(".modal-container-data");
const modalTriggersData = document.querySelectorAll(".modal-trigger-data");
modalTriggersData.forEach(trigger => trigger.addEventListener("click",(e) => {
    modalContainerData.classList.toggle("active");
    console.log(e.target.id);
    console.log(document.getElementById(e.target.id).textContent)
}))

//Activation des changements des données des sections
const entry= document.querySelector('#entry');
const cfwd= document.querySelector('#cfwd');
const camber= document.querySelector('#camber');
const draft= document.querySelector('#draft');
const caft= document.querySelector('#caft');
const exit= document.querySelector('#exit');
const twist= document.querySelector('#twist');
const saglat= document.querySelector('#sag-lat');
const saglong= document.querySelector('#sag-long');
console.log(entry.checked);
