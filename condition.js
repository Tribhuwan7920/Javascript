// let age = 79


// if(age>60){
//     console.log("you are just not elligible to apply for driving licence");
    
// }
// else if(age>18){
//     console.log("you are elligible to apply for driving licence");
// }
// else{
//     console.log("you are not elligible to apply for driving licence");
// }


let area = prompt("enter the shape : ");


if(area == 'square'){
    let side = Number(prompt("enter side : "))
    console.log(side * side);
    document.write(side * side);

}
else if (area == "triangle"){
    let height =Number( prompt("enter the height : "))
    let base = Number(prompt("enter len of base : "))
    document.write((height*base)/2);
}
else if (area == "rect"){
    let height =Number( prompt("enter the height : "))
    let len = Number(prompt("enter len of length : "))
    document.write(height*len);
}