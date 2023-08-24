// Write a dart program to calculate electricity bill of a house based on following criteria
// For first 90 units: No charge
// 90 to 180 units: 6 rupees per unit
// 180 to 250 units: 10 rupees per unit
// Above 250 units: 15 rupees per unit
// Input: 90;  Output: 0
// Input: 120;  Output: 180

void main() {
  num unit = 120;

  if (unit <= 90) {
    print("No charge");
  } else if ((unit > 90) && (unit <= 180)) {
    print((unit - 90)*6);
  } else if ((unit > 180) && (unit <= 250)) {
    print(540 + (unit - 180)*10);
  } else if (unit > 250) {
    print(1240 + (unit - 250)*15);
  }
}