// let money = prompt("Your Monthly Budget"),
//     time  = prompt("Enter Date YYY-MM-DD");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };

// askQuestions();

// function askQuestions(){
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");


//     if (typeof(a) === "string"  && typeof(a) !=null && typeof(b) != null && a != '' && b != '' && a.length < 50){
//         console.log('Done');
//         appData.expenses[a] = b;
//     }   else {
//             askQuestions();
//     }    
  
// }
// }