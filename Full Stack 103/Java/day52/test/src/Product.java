public class Product {
    private double cost;
    private String name;
    private int quantity;

    public Product (double cost, String name, int quantity) {
        this.cost = cost;
        this.name = name;
        this.quantity = quantity;
    }

    public double totalCost(){
        return cost*quantity;
    }
    public void Print(){
        System.out.println(name + " costs $" + cost + " per unit, and " + quantity + " total units were purchased \n" + "Total cost of the " + name + " is " + totalCost());
    }
};

