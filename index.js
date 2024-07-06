//v2, set a button on top of the screen to let user chose a number less than 100
// step 1, set a button for user input, and then save the input to a variable

const container1 = document.querySelector("#container");
let divInContainer = false;
const btn1 = document.querySelector("#button16")
btn1.addEventListener('click', create16Divs);

const btn2 = document.querySelector("#chooseButton");
btn2.addEventListener('click', createMultipleDivs);

function createMultipleDivs (){
    if(divInContainer == false){
        const userInput = prompt('Choose 1 to 100: ');
        let userNum = Number(userInput);
        let squareUserNum = userNum * userNum;
        // console.log(userNum);
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
                container1.appendChild(createMultiDivs);
            } divInContainer = true;
        } 
    }     else {
        container1.innerHTML = '';
        divInContainer = false;}
    }




function create16Divs (){
    let numDiv = 16 * 16;

    if (divInContainer == false){
        for (let i = 1; i <= numDiv; i++){
            const createDiv = document.createElement("div");
            createDiv.style.width = "50px";
            createDiv.style.height = "50px";
            createDiv.setAttribute("class", "colorDiv");
            container1.appendChild(createDiv);
        } divInContainer = true;



    } else {
        container1.innerHTML = '';
        divInContainer = false;
 }          
}
// event delegation
container1.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('colorDiv')) {
      event.target.style.backgroundColor = "black";
    }
  });


  

