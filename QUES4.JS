var Saving={AccountNumber:12323434,
    AccountHolderName:"AMITABH",
    AccountBalance:60000,
    isSalary:true,
    withdrawal(amount){
        if(this.AccountBalance<parseInt(amount))
        console.log("Insufficient Funds");
        else{
            this.AccountBalance -= amount;
    }},

    getAccountBalance(){
            console.log(this.AccountBalance)
    }
}

var Current={AccountNumber:12323434,
            AccountHolderName:"AMITABH",
            AccountBalance:60000,
            odLimit:100000,

            withdrawal(amount){
                if(this.AccountBalance+this.odLimit<parseIntamount)
                console.log("Can't Withdraw");
                else{
                    this.AccountBalance -= amount;
            }},
            getAccountBalance(){
                console.log(this.AccountBalance)
        }
    };
    
    Saving.withdrawal(210);
    Saving.getAccountBalance();
