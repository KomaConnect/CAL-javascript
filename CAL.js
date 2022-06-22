
const operator = prompt("select your preferred operation (+, -, *, /): ") 

const Num1 = parseFloat(prompt("Enter the first number: "));
const Num2 = parseFloat(prompt("Enter the second number: "));

let result = 0;
if (isNaN(Num1) || isNaN(Num2)){
        alert("Wrong input! Refresh page to try again.")
}else {

        if (operator == "+") {
                result= Num1 + Num2; 
        }else if (operator == "-") {
                result= Num1 - Num2;
        }else if (operator == "*") {
                result= Num1 * Num2;
        }else if (operator == "/") {
                result= Num1 / Num2;
        }
        Prompt(result)
        
}
        
       