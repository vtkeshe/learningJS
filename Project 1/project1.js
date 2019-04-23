let money = prompt("Your Monthly Budget"),
    time  = prompt("Enter Date YYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

askQuestions();

function askQuestions(){
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");


    if (typeof(a) === "string"  && typeof(a) !=null && typeof(b) != null && a != '' && b != '' && a.length < 50){
        console.log('Done');
        appData.expenses[a] = b;
    }   else {
            askQuestions();
    }    
  
}
}

var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var greeting;

document.write('<h3>' + hourNow + ':' + minutesNow + '</h3>');

if (hourNow > 18) {
    greeting = "Good Evening!";
} else if (hourNow > 12) {
    greeting = "Good Afternoon";
} else {
    greeting = 'Welcome';
}

document.write("<h1>" + greeting + '</h1>');

var color = ['red', 'greeen', 'blue'];
color[2] = "magenta";

console.log(color);

var el = document.getElementById('colors');

console.log(el);

 el.textContent = color[1];

var el2 = document.getElementById('test');

el2.textContent = "greeting";


// appData.moneyPerDay = appData.budget/30;

// alert('Daily Budget: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {


// }

/* document.getElementById("budgetAmount");
document.write() */

