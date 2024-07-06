package practice.conditional;
import java.util.Scanner;

/* Calculate Profit or Loss
   Write a program that takes cost price and selling price and calculates its profit or loss*/
public class q7 {
    public static void main(String[] args){
        Scanner price = new Scanner(System.in);
        System.out.print("sellingPrice: ");
        int sp = price.nextInt();
        System.out.print("costPrice: ");
        int cp = price.nextInt();
        if (sp < cp){
            System.out.print("Loss of " + (cp-sp));
        }
        else if (sp > cp){
            System.out.print("Profit of " + (sp-cp));
        }
    }
}
