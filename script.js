const name = "Edger";
const age = 23;
is_sunny = true;
const fruits = ["oranges", "apples", "lemons"];
const person = {
    name: 'Edger',
    age: 22,
    in_school: true
};
console.log('name:',name);
console.log('age:', age)
console.log('is sunny:', is_sunny);
console.log('fruits:', fruits);
console.log('person:', person);

function Calculator() {
    const num1= prompt("please enter the num1:");
    const num2= prompt("please enter the num2:");
    const operator = prompt("Choose an operation (+, -, *, /):");
    //ensure valid numbers are entered
    if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Division by zero is not allowed.");
        return;
      }
      break;
    default:
      alert("Invalid operation. Please choose +, -, *, or /.");
      return;
  }

  // Output result
  alert(`Result: ${result}`);
}
console.log(Calculator());


function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

alert(greetUser('Edger'));

function eligible() {
    const age = prompt('Please enter your age:');
    if (age >= 18) {
        alert("You are eligible to vote!");
    } else {
        alert("You are not eligible to vote yet.");
    }
}
eligible();

let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ol.appendChild(li);
}
document.body.appendChild(ol);

document.querySelector("h1").textContent = "JavaScript in Action!";
let dynamicContent = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.body.appendChild(newParagraph);



