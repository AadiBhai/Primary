package practice.conditional;

// Write a Java program in which according to the number of month print the number of days in that month.
import java.util.*;
public class q5 {
    public static void main(String[] args){
        Scanner num = new Scanner(System.in);
        System.out.println("Enter the number of month: ");
        int month = num.nextInt();
        if (month > 0) {
            switch (month) {
                case 1:
                    System.out.print("January has 31 days");
                    break;
                case 2:
                    System.out.print("February has 28 days in general and 29 days in leap year");
                    break;
                case 3:
                    System.out.print("March has 31 days");
                    break;
                case 4:
                    System.out.print("April has 30 days");
                    break;
                case 5:
                    System.out.print("May has 31 days");
                    break;
                case 6:
                    System.out.print("June has 30 days");
                    break;
                case 7:
                    System.out.print("July has 31 days");
                    break;
                case 8:
                    System.out.print("August has 31 days");
                    break;
                case 9:
                    System.out.print("September has 30 days");
                    break;
                case 10:
                    System.out.print("October has 31 days");
                    break;
                case 11:
                    System.out.print("November has 30 days");
                    break;
                case 12:
                    System.out.print("December has 31 days");
                    break;
                default:
                    System.out.print("Invalid month");
            }
        }
    }
}