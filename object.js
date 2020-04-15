let money = prompt("Enter your budget for 1 month: ", "");
let time = prompt("Enter date in YYYY-MM-DD format: ", "");


let appDate = {
        budget: money,
        timeDate: time,
        expenses: {},
        income: [],
        optionalExpenses: {},
        savings: false
}


let a = prompt("Enter mandatory expenses of this month: ", "");
let b = prompt("Amount of cost: ", "");
let c = prompt("Enter mandatory expenses of this month: ", "");
let d = prompt("Amount of cost: ", "");


appDate[a] = b;
appDate[c] = d;


alert(appDate.budget/30);