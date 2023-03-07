const radius = [3, 1, 2, 4]

function diameter(radius){
    return 2 * radius
}

function area (radius) {
   return Math.PI * radius * radius
}

function circumference (radius){
    return (2 * Math.PI * radius);
}

Array.prototype.calculate = function(logic){  // Added into Array prototype and we can access calculate function all over the project.
    const output = [];                        // map()   // calculate()  
    for(let i=0; i< radius.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log('...Diameter of circule..', radius.calculate(diameter));
console.log('...circumference of circule..', radius.calculate(circumference));
console.log('...area of circule..', radius.calculate(area));