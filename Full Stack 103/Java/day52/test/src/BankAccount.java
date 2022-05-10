public class BankAccount {
    private String holderName;
    private double balance;

    public BankAccount(String holderName, double balance) {
        this.balance = balance;
        this.holderName = holderName;
    }

    public double Deposit(double depAmt){
        balance += depAmt;
        return depAmt;
    }
    public double Withdrawal(double withdrawAmt){
        balance -= withdrawAmt;
        return withdrawAmt;
    }
    public double trx(BankAccount transfer, double amt){
        double pullAmt = this.Withdrawal(amt);
        return transfer.Deposit(pullAmt);
    }
    public void Total(){
        System.out.println("The customer's name is " + holderName + " and their balance " + balance);
    }

}
