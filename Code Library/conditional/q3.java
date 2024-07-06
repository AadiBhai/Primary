package practice.conditional;
import java.util.Scanner;

// Write a Java program, take a number, and print whether it is positive or negative.
public class q3 {
    public static void main(String[] args){
        System.out.print("Enter an Integer: ");
        Scanner num = new Scanner(System.in);
        int var = num.nextInt();
        if (var < 0){
            System.out.print("Number is negative.");
        }
        else if (var > 0) {
            System.out.print("Number is positive");
        }
        else {
            System.out.print("Neither negative nor positive");
        }
    }
}
