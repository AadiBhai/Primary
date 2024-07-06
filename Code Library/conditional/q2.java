package practice.conditional;

// Write a Java program, take a number, and print whether it is less than 10 or greater than 10.
import java.util.*;

public class q2 {
    public static void main(String[] args){
        System.out.print("Enter a number: ");
        Scanner inp = new Scanner(System.in);
        int var = inp.nextInt();
        if (var < 10) {
            System.out.print("Number is less than 10");
        }
        else if (var > 10){
            System.out.print("Number is greater than 10");
        }
        else {
            System.out.print("Number is 10");
        }
    }
}
