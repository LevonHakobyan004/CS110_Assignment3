let grade = 23;
let letter = "";

if (grade >= 0 && grade < 60) letter = "F";
else if (grade >= 60 && grade <= 62) letter = "D-";
else if (grade >= 63 && grade <= 66) letter = "D";
else if (grade >= 67 && grade <= 69) letter = "D+";
else if (grade >= 70 && grade <= 72) letter = "C-";
else if (grade >= 73 && grade <= 76) letter = "C";
else if (grade >= 77 && grade <= 79) letter = "C+";
else if (grade >= 80 && grade <= 82) letter = "B-";
else if (grade >= 83 && grade <= 86) letter = "B";
else if (grade >= 87 && grade <= 89) letter = "B+";
else if (grade >= 90 && grade <= 92) letter = "A-";
else if (grade >= 93 && grade <= 96) letter = "A";
else if (grade >= 97 && grade <= 100) letter = "A+";

switch (letter) {
  case "D-":
  case "D":
  case "D+":
    console.log(`Your grade is ${grade} which corresponds to ${letter}. You failed`);
    break;
  case "C-":
  case "C":
  case "C+":
  case "B-":
  case "B":
  case "B+":
  case "A-":
  case "A":
  case "A+":
    console.log(`Your grade is ${grade} which corresponds to ${letter}. You passed`);
}
