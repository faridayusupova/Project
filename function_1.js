let money, time;

function start(){
money = prompt("Enter your budget for 1 month: ", "");
time = prompt("Enter date in YYYY-MM-DD format: ", "");


while( isNaN(money) || money == "" || money == null){
        money = +prompt("Your monthly budget: ", "");
}
}
start();


let appDate = {
        budget: money,
        timeDate: time,
        expenses: {},
        income: [],
        optionalExpenses: {},
        savings: true,
        chooseExpenses: function(){
                for (let i = 0; i < 2; i++){
                        let a = prompt("Enter mandatory expenses of this month: ", ''),
                            b = prompt("Amount of cost: ", '');  
                        
                        if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
                        && a != '' && b != '' && a.length < 50) {
                                console.log('done');
                                appDate.expenses[a] = b;
                        } else {
                                console.log ("bad result");
                                i--;
                        }
                            
                }
        },

        checkSaving: function(){
                if (appDate.savings == true){
                        let save = +prompt("The sum of savings"),
                            percent = +prompt("The percentage");
        
                appDate.monthIncome = save/100/12*percent;
                alert("Monthly income from your deposit is: "+ appDate.monthIncome);
                }
        },

        detectDayBudget: function(){
                appDate.moneyPerDay = (appDate.budget / 30).toFixed();
                alert("Daily budget: " + appDate.moneyPerDay);
        },

        detectLevel: function(){
                if (appDate.moneyPerDay < 100){
                        console.log("Minimum rate of salary");
                }else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000){
                        console.log("Middle rate of salary");           
                }else if  (appDate.moneyPerDay > 2000) {
                        console.log("Middle rate of salary"); 
                } else {
                        console.log("Error occured")
                }
        },

        checkSaving: function(){
                if (appDate.savings == true){
                        let save = +prompt("The sum of savings"),
                            percent = +prompt("The percentage");
        
                appDate.monthIncome = save/100/12*percent;
                alert("Monthly income from your deposit is: "+ appDate.monthIncome);
                }
        },

        chooseOptExpenses: function(){
                for (let i = 2; i < 3; i++){
                        let opt = prompt("Optional expenses: "+ '');
                        appDate.optionalExpenses[i] = opt;
                }
        },

        chooseIncome: function(){
                let items = prompt("What will bring additional income", '');
                appDate.income = items.split(',');
                appDate.income.push(prompt("Something else?"));
                appDate.income.sort();
        }
}



