let image = document.querySelector("img")
let h1 = document.querySelector("h1")

console.log(image)
console.log(h1)

let filterBlur = 30, i = 0;
let check = true
//Function for recovering from the blur
antiBlur = (img, blurFactor, number) => {
    img.style.filter = `blur(${blurFactor}px)`
    h1.textContent = `${number}%`;
}

//from the stackOverflow
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let blur = () => {
    if (i <= 99) {
        for (let x = 0; x < 60; x++) 
        {
            filterBlur -= 0.007
            antiBlur(image, filterBlur, i + 1)
            //my logic good but th later is better
            //  if (Math.ceil(filterBlur) == 0)    
            //    h1.classList.add("inactive")
            
            //Function to map a number to another number
            h1.style.opacity = scale(i,0,100,1,0)
        }
    }
    i++
}

setInterval(blur, 30);


