//v3 added random, outline, and transparent colors

const container1 = document.querySelector("#container");
let divInContainer = false;
const btn1 = document.querySelector("#button16")
btn1.addEventListener('click', create16Divs);
let randomColor;
let randomColorOn = false;
let transparentColorOn = false;
let outlineOnSwitch = false;
let defaultColor = "#000000";
let opacColor;
opacArr = ["1A","33","4D","66","80","99","B3","CC","E6","FF"]

const btn2 = document.querySelector("#chooseButton");
btn2.addEventListener('click', createMultipleDivs);

function resetOptions (){
    document.getElementById("outlineOn").checked = false;
    document.getElementById("randomColor").checked = false;
    document.getElementById("transparentColor").checked = false;
    transparentColorOn = false;
    randomColorOn = false;
    outlineOnSwitch = false;
}

function createMultipleDivs (){
    if(divInContainer == false){
        const userInput = prompt('Choose 1 to 100: ');
        let userNum = Number(userInput);
        let squareUserNum = userNum * userNum;
        if (!userNum) {
            alert("Please enter a number");
        } else if (userNum > 100 || userNum < 1){
            alert("Between 1 to 100, bro");
        } else if (divInContainer == false && userNum >= 1 && userNum <= 100){
            
            for (let i = 1; i <= squareUserNum; i++){       
                const createMultiDivs = document.createElement("div");
                createMultiDivs.style.width = Math.floor(800 / userNum) + 'px';
                createMultiDivs.style.height = Math.floor(800 / userNum) + 'px';
                createMultiDivs.setAttribute("class", "colorDiv");
                createMultiDivs.style.backgroundColor = "white";
                container1.appendChild(createMultiDivs);
            } divInContainer = true;
            resetOptions();
            btn2.style.backgroundColor = "pink";

    
        } 
    }     else {
        container1.innerHTML = '';
        divInContainer = false;
        resetOptions();
        btn2.style.backgroundColor = "white";
    }


    }




function create16Divs (){
    let numDiv = 16 * 16;

    if (divInContainer == false){
        for (let i = 1; i <= numDiv; i++){
            const createDiv = document.createElement("div");
            createDiv.style.width = "50px";
            createDiv.style.height = "50px";
            createDiv.setAttribute("class", "colorDiv");
            createDiv.style.backgroundColor = "white";
            container1.appendChild(createDiv);
        } divInContainer = true;
        resetOptions();
        btn1.style.backgroundColor = "pink";



    } else {
        container1.innerHTML = '';
        divInContainer = false;
        resetOptions();
        btn1.style.backgroundColor = "white";
 }          
}
// event delegation

container1.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('colorDiv')) {      
        if (randomColorOn == true){
            randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            event.target.style.backgroundColor = randomColor;
        } else if (randomColorOn == false && transparentColorOn == false){
            event.target.style.backgroundColor = "#000000";
        }   
            else if (transparentColorOn == true){
                if (event.target.style.backgroundColor === "white"){
                    event.target.style.backgroundColor = "#000000";
                    event.target.style.opacity = 0.1;
                    event.target.hoverCount = 1;
                    console.log(event.target.hoverCount);
                } else {
                    let hoverCount = event.target.hoverCount;
                    if (hoverCount < 10){
                        hoverCount++;
                        event.target.style.opacity = hoverCount * 0.1;
                        event.target.hoverCount = hoverCount;
                    } else {
                        event.target.style.opacity = "1";
                    }
                }
        }
    }
});


// checkbox options

const outlineOn = document.querySelector('#outlineOn');
outlineOn.addEventListener('change', (event) => {
    if (outlineOn.checked){
        const insideDiv = container1.childNodes;
        for (let i = 0; i < insideDiv.length; i++){
            if (insideDiv[i].nodeName.toLowerCase() == 'div'){
                insideDiv[i].style.outline = "1px solid black";
            } 
        } outlineOnSwitch = true;
    } else {
        const insideDiv = container1.childNodes;
        for (let i = 0; i < insideDiv.length; i++){
            if (insideDiv[i].nodeName.toLowerCase() == 'div'){
                insideDiv[i].style.outline = "none";
            } 
        } outlineOnSwitch = false;
    }
   });

   // random color

   const drawRandom = document.querySelector("#randomColor");
   drawRandom.addEventListener('change', (event) => {
    if (drawRandom.checked){
        randomColorOn = true;
        document.getElementById("transparentColor").checked = false;
        transparentColorOn = false;
    } else {
        randomColorOn = false;
        
    }
});

    // transparent color

    const transparentColor = document.querySelector("#transparentColor");
    transparentColor.addEventListener('change', (event) => {
        if (transparentColor.checked){
            transparentColorOn = true;
            document.getElementById("randomColor").checked = false;
            randomColorOn = false;
        } else {
            transparentColorOn = false;
            
        }
});