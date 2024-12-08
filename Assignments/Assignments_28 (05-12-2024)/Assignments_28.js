// Assingment Dec-5 : Implement Javascript class for BankAccount having account number, 
//  customer id, type and balance

// Implement 2 methods in class to deposit amount and withdraw amount from balance

// Create atleast 3 account objects with new keyword and passing values

// iterate object using for in loop 


class BankAccount {
  constructor(accountNumber, customerId, type, balance) {
    this.accountNumber = accountNumber;
    this.customerId = customerId;
    this.type = type;
    this.balance = balance;
  }

  //  deposit 
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`\n₹${amount} deposited successfully. \nNew balance: ₹${this.balance}`);
    } else {
      console.log('\nEnter Correct Amount.');
    }
  }

  // withdraw 
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`\n₹${amount} withdrawn successfully. \nNew balance: ₹${this.balance}`);
    } else if (amount > this.balance) {
      console.log('\nInsufficient balance.');
    } else {
      console.log('\nEnter Correct Amount.');
    }
  }
}

//  objects
const acc1 = new BankAccount(251, '2551', 'Current', 10000);
const acc2 = new BankAccount(252, '2552', 'Current', 20000);
const acc3 = new BankAccount(253, '2553', 'Current', 30000);


// array for iteration
const accounts = [acc1, acc2, acc3];


// Iterate through the objects using a `for-in` loop
accounts.forEach((account, index) => {
  console.log(`\nDetails of Account ${index + 1}:`);
  for (let key in account) {
    console.log(`${key}: ${account[key]}`);
  }
});


//   withdraw operations
acc1.deposit(50000);
acc1.withdraw(20000);

acc2.deposit(5000);
acc2.withdraw(200000); //  insufficient balance


acc3.deposit(3000);
acc3.withdraw(000); //  Enter correct Amount
