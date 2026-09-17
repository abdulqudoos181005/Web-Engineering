const students = [
  { name: "Ayesha", score: 85 },
  { name: "Bilal", score: 92 },
  { name: "Sara", score: 76 },
  { name: "Hamza", score: 95 },
];

const totalScore = students.reduce((total, student) => total + student.score, 0);
const classAverage = totalScore / students.length;
const aboveAverageNames = students
  .filter((student) => student.score > classAverage)
  .map((student) => student.name);

console.log("class average:", classAverage);
console.log("above-average students:", aboveAverageNames);
console.log("any score above 90:", students.some((student) => student.score > 90));
console.log("every score above 40:", students.every((student) => student.score > 40));

const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log("sorted high-to-low:", sortedStudents);
console.log("original students:", students);
