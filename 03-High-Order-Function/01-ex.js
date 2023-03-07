const radius = [3, 1, 2, 4]
function area () {
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}

console.log('....Area of circule..', area(radius));

function circumference (){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output;
}

console.log('...Circumference of circule..', circumference(radius));

function diameter(){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(2 * radius[i])
    }
    return output;
}

console.log('...Diameter of circule..', diameter(radius));
