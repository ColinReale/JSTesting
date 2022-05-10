public class Customer {
    public String name;
    public int age;

    // the class constructor
    public Customer(String customerName) {
        this.age = 0;
        this.name = customerName;
    }

    public void howOld(int customerAge) {
        this.age = customerAge;
    }
    public void printCustomer() {
        System.out.println("The customer's name is " + this.name + " and their age is " + this.age);
    }

    public String frequentCustomer() {
        return "frequent";
    }

    public String nonFrequentCustomer() {
        return "non-frequent";
    }
}