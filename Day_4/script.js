//click//

//variables//
const container = document.getElementById("container");

const large = document.getElementById("large");
const medium = document.getElementById("medium");
const small = document.getElementById("small");

const longDelay = 1000;
const midDelay = 500;
const shortDelay = 0;

//Event handlers//

container.addEventListener("click", toggleGrow)

//functions//

function toggleGrow(){
    if (large.className === "circle grow-large"){
        setTimeout(function() {
        large.classList.remove("grow-large")},longDelay);
        }else{
            setTimeout(function() {
            large.classList.add("grow-large")},shortDelay);
        }

    setTimeout(function() {
        medium.classList.toggle("grow-med");
    },midDelay)

    if (small.className === "circle grow-small"){
        setTimeout(function(){
        small.classList.remove("grow-small")
        },shortDelay)
    } else {
        setTimeout(function(){
        small.classList.add("grow-small")
        },longDelay)
    }
}

