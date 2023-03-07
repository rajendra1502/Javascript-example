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

function calculate(radius, logic){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log('...circumference of circule..', calculate(radius, circumference));
console.log('...area of circule..', calculate(radius, area));
console.log('...Diameter of circule..', calculate(radius, diameter));


