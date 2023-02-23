
function operation(a,b){ //davaleba 1 
    if (a === b){
        return  'Tolia'
    }
    else{
        return 'Arari Toli'
    }
}
console.log(operation(2 ,2));
console.log(operation(4,2));

function calculate(operator, a, b) { //davaleba 2 
    if (typeof a !== 'number' || typeof b !== 'number') {
      return false;
    }
  
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return false;
    }
  }

console.log(calculate('+',2,3));
console.log(calculate('-',2,3));
console.log(calculate('*',2,3));
console.log(calculate('/',2,3));
console.log(calculate('+','Kata','Tagvi'));




function convertFtoC(fah){ //davaleba 5
    if (typeof fah !== 'number'){
        return false
    }

    let Celsius = (fah - 32) *5/9;
    return Celsius;
}
console.log(convertFtoC(86));
console.log(convertFtoC(77));










