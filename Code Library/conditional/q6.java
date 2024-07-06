package practice.conditional;

// Write a program to find the maximum between three numbers.
import java.util.Scanner;
public class q6 {
    // by making max method without using inbuilt method
    static void InMax(){
        Scanner num = new Scanner(System.in);
        System.out.println("Enter three numbers");
        int num1 = num.nextInt();
        int num2 = num.nextInt();
        int num3 = num.nextInt();
        if (num1 > num2 && num1 > num3){
            System.out.println(num1 + " is the maximum between " + num1 + ", " + num2 + " and " +num3);
        }else if (num2 > num1 && num2 > num3){
            System.out.println(num2 + " is the maximum between " + num1 + ", " + num2 + " and " +num3);
        }else if (num3 > num2 && num3 > num1){
            System.out.println(num3 + " is the maximum between " + num1 + ", " + num2 + " and " +num3);
        }
    }
    public static void main(String[] args){
        InMax();
        Scanner num = new Scanner(System.in);
        System.out.println("Enter three numbers");
        int num1 = num.nextInt();
        int num2 = num.nextInt();
        int num3 = num.nextInt();
        int max = Math.max(Math.max(num1, num2), num3);
        System.out.print(max + " is the maximum between " + num1 + ", " + num2 + " and " +num3);
    }
}
