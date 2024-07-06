package practice.conditional;

// Write a Java program that checks a number from 0 to 5 and prints its spelling, if the number is greater than 5 print the number is greater than 5.
import java.util.Scanner;

public class q4 {
    public static void main(String[] args){
        System.out.print("Enter a number: ");
        Scanner num = new Scanner(System.in);
        int var = num.nextInt();
        if (var >= 0) {
            if (var == 0) {
                System.out.print("Zero");
            } else if (var == 1) {
                System.out.print("One");
            }
            else if (var == 2) {
                System.out.print("Two");
            }
            else if (var == 3) {
                System.out.print("Three");
            }
            else if (var == 4) {
                System.out.print("Four");
            }
            else if (var == 5) {
                System.out.print("Five");
            }
            else {
                System.out.print("Number is greater than five");
            }
        }
        else {
            System.out.print("Number is less than Zero");
        }
    }
}
