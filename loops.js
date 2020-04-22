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




for (let i = 0; i < 2; i++){
        let a = prompt("Enter mandatory expenses of this month: ", ''),
            b = prompt("Amount of cost: ", '');  
        
        if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appDate.expenses[a] = b;
        } else {

        }
            
}

appDate.moneyPerDay = appDate.budget / 30;
alert("Daily budget: " + appDate.moneyPerDay);

if (appDate.moneyPerDay < 100){
        console.log("Minimum rate of salary");
}else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000){
        console.log("Middle rate of salary");           
}else if  (appDate.moneyPerDay > 2000) {
        console.log("Middle rate of salary"); 
} else {
        console.log("Error occured")
}
    
