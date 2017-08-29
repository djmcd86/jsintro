//Methods and properties
var myObj = {
  color: "orange",  //These are properties
  shape: "sphere",
  type: "food",
  eat: function() {return "yummy"}  //This is a method
};
//To Call:
myObj.eat //calls Methods
myObj.color //gets property

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function printAccount(balance, interestRatePercent) {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    }// your code goes here
};

console.log(savingsAccount.printAccountSummary());

//First attempt: everything correct except 'facebookProfile is not defined'???
var facebookProfile = {
    name: "Dean",
    friends: 221,
    messages: ["Hey, get outta here!", "we are rude online", "still talking??"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        facbookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    }
};
