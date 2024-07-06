package practice.conditional;
import java.util.Scanner;

// Write a program in Java to accept three numbers and check whether they are pythagorean triplets or not.
public class q9 {
    public static void main(String[] args){
        Scanner num = new Scanner(System.in);
        System.out.println("Enter three numbers:");
        int a = num.nextInt();
        int b = num.nextInt();
        int c = num.nextInt();
        if (a*a + b*b == c*c){
            System.out.println("This is Pythagorean triplet");
        }
        else {
            System.out.println("This is not a Pythagorean triplet");
        }
    }
}
