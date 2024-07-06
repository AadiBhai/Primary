package practice.conditional;

// Write a Java program to check if a number is even or odd.
import java.util.Scanner;

public class q1 {
    public static void main(String[] args){
        System.out.print("Enter a number: ");
        Scanner a = new Scanner(System.in);
        int num = a.nextInt();
        if (num % 2 == 0){
            System.out.print("This is even number");
        } else {
            System.out.print("This is odd number");
        }
    }
}
