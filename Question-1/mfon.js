function myFunction() {

    let income, expenses, balance

    income = prompt("Enter Your Income");

    expenses = prompt("Enter Your Expense");

    balance = income - expenses

    // Positve  n > 0 
    // Negative n < 0

    if (balance > 0) {
        // console.log("Balance N" + balance + " is Positive");

        document.getElementById("income").innerHTML = "Balance N" + balance + " is Positive";

    } else
    // if (balance < 0) 
    {
        // console.log("Balance N" + balance + " is Negative");

        document.getElementById("income").innerHTML = "Balance N" + balance + " is Negative";
    }

}

