// Assingment Dec-5 : Implement Javascript class for BankAccount having account number, 
//  customer id, type and balance

// Implement 2 methods in class to deposit amount and withdraw amount from balance

// Create atleast 3 account objects with new keyword and passing values

// iterate object using for in loop 


class BankAccount {
    constructor(accountNumber, customerId, type, balance) 
    {
      this.accountNumber = accountNumber;
      this.customerId = customerId;
      this.type = type;
      this.balance = balance;
    }
  
    //  deposit 
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully. New balance: ₹${this.balance}`);
      } else {
        console.log('Invalid deposit amount.');
      }
    }
  
    // withdraw 
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`₹${amount} withdrawn successfully. New balance: ₹${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient balance.');
      } else {
        console.log('Invalid withdrawal amount.');
      }
    }
  }
  
  //  objects
  const acc1 = new BankAccount(101, '001', 'Savings', 50000);
  const acc2 = new BankAccount(102, '002', 'Current', 100000);
  const acc3 = new BankAccount(103, '003', 'Savings', 3000);
  
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
  acc1.deposit(2000);
  acc1.withdraw(1000);
  
  acc2.deposit(5000);
  acc2.withdraw(200000); //  insufficient balance
  