let money = prompt("Your Monthly Budget"),
    time  = prompt("Enter Date YYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}




for (let i = 0, i < 2, i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
        b = prompt("Во сколько обойдется?");

    appData.expenses[a] = b;
}


alert(appData.budget/30)