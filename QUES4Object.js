class BankAccountDetails
{
    constructor(accountNumber,accountHoldername,accountBalance)
{
    this.accountNumber=accountNumber;
    this.accountHoldername=accountHoldername;
    this.accountBalance=accountBalance;
    
}
deposit(amount_to_Deposit)
{
    this.accountBalance=this.accountBalance+amount_to_Deposit;
    console.log("New Account Balance:" +this.accountBalance)
}
}
class Savings extends BankAccountDetails
{
    constructor(accountNumber,accountHoldername,accountBalance,isSalary)
    
    {
        super(accountNumber,accountHoldername,accountBalance);
        this.isSalary=isSalary;
    }
withdraw(amount_to_Withdraw)
{
    this.amount_to_Withdraw=this.accountBalance-amount_to_Withdraw;
    if(this.amount_to_Withdraw<0)
    {
        console.log(" Insufficient" );
}
else{
    console.log("Withdrawl Amount is:" +amount_to_Withdraw+ "Remaining Balance" +this.amount_to_Withdraw);
 
    console.log("Amount Withdrawn Successfully");
}
}
}
class Current extends BankAccountDetails
{
    constructor(accountNumber,accountHoldername,accountBalance,odLimit)

    {
        super(accountNumber,accountHoldername,accountBalance);
        this.odLimit=odLimit;
    }
    withdraw(amount_to_Withdraw)
{
    this.amount_to_Withdraw=this.accountBalance-amount_to_Withdraw;
    if(this.amount_to_Withdraw<0)
    {
        if((amount_to_Withdraw)>=(this.odLimit+this.accountBalance))
        {
            console.log(" Insufficient" );
        }
        else{
            console.log("Withdrawl Amount is:" +amount_to_Withdraw+ "Amount deducted from od is:" +this.amount_to_Withdraw);
         
            console.log("Amount Withdrawn Successfully");
        }
    }
    else{
        console.log("Withdrawl Amount is:" +amount_to_Withdraw+ "Remaining Balance" +this.amount_to_Withdraw);
     
        console.log("Amount Withdrawn Successfully");
    }
}
}

var savings= new Savings(10000727376,"Amitabh",10000,true);
var current= new Current(10000727376,"Amitabh",10000,true);
savings.deposit(3000);
savings.withdraw(1000);
current.deposit(3000);
current.withdraw(25000);