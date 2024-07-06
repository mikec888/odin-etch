
const container1 = document.querySelector("#container");
let divInContainer = false;
const btn1 = document.querySelector("#button16")

btn1.addEventListener('click', create16Divs);


function create16Divs (){
    let numDiv = 16 * 16;

    if (divInContainer == false){
        for (let i = 1; i <= numDiv; i++){
            const createDiv = document.createElement("div");
            createDiv.style.width = "50px";
            createDiv.style.height = "50px";
            createDiv.setAttribute("class", "colorDiv");
            createDiv.innerHTML = "Hi";
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
      console.log("aiy");
    }
  });


  

