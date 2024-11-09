function myFunction() {

    // Part 2: Enhanced Budget Tracker

    // Step 1: Declare arrays for incomes and expenses
    let incomes = [];
    let expenses = [];

    // Function to add an amount to either income or expenses
    function addAmount(type, amount) {

        // TODO: Validate amount and add it to the correct array
        if (type == "income" && /^\d+$/.test(amount) === true) {
            incomes.push(amount)
        }

        if (type == "expense" && /^\d+$/.test(amount) === true) {
            expenses.push(amount)
        }

    }

    // Function to calculate the total of an array
    function calculateTotal(arr) {
        let total = 0;
        // TODO: Use a for loop to calculate the total
        for (let index = 0; index < arr.length; index++) {
            // console.log(arr, total);

            total = total + Number(arr[index]);
        }
        return total;
    }

    // Function to calculate and display the balance
    function calculateBalance() {
        // TODO: Calculate total income and total expenses
        const totalIncome = calculateTotal(incomes)
        const totalExpenses = calculateTotal(expenses)
        // TODO: Calculate the balance
        const balance = totalIncome - totalExpenses
        // TODO: Determine if the balance is positive or negative
        // TODO: Display the balance and its status
        document.getElementById("incomes").innerHTML = "[" + incomes.toString() + "]";
        document.getElementById("expenses").innerHTML = "[" + expenses.toString() + "]";


        if (balance > 0) {

            document.getElementById("total").innerHTML = "Balance " + balance + " is Positive";

        } else
        // if (balance < 0) 
        {
            document.getElementById("total").innerHTML = "Balance " + balance + " is Negative";
        }
    }

    // Step 2: Input Flow for Income
    let incomeInput = prompt("Enter an income amount (or type 'done' to finish):");
    while (incomeInput.toLowerCase() !== "done") {
        // TODO: Call addAmount function for income
        addAmount("income", incomeInput)
        incomeInput = prompt("Enter another income amount (or type 'done' to finish):");
    }

    // Step 3: Input Flow for Expenses
    let expenseInput = prompt("Enter an expense amount (or type 'done' to finish):");
    while (expenseInput.toLowerCase() !== "done") {
        // TODO: Call addAmount function for expenses
        addAmount("expense", expenseInput)
        expenseInput = prompt("Enter another expense amount (or type 'done' to finish):");
    }

    // Step 4: Calculate and display the final balance
    calculateBalance();
}
