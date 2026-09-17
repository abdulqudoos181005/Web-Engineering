// Activity A: const, let, and strict equality
const course = "Web Eng";

try {
  course = "Other";
} catch (error) {
  console.log("Reassigning const throws:", error instanceof TypeError);
}

let count = 0;
count++;
count++;
console.log("count:", count);

console.log("0 == false:", 0 == false);
// Prediction: true, because == converts the values to a common type.

console.log("0 === false:", 0 === false);
// Prediction: false, because === compares both value and type.

console.log("[] == false:", [] == false);
// Prediction: true, because == converts the empty array and false before comparing.

// Activity C: grade and nullish coalescing
function letterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  }
  return "F";
}

function displayCount(n) {
  return n ?? "No count provided";
}

console.log("letterGrade(95):", letterGrade(95));
console.log("displayCount(0):", displayCount(0));
console.log("displayCount(null):", displayCount(null));
console.log("displayCount(42):", displayCount(42));