/**
 * printGradebook
 * Given an array of student objects { name, score }, prints:
 *   - class average
 *   - highest scorer
 *   - lowest scorer
 *   - pass rate (%) — pass threshold is 60
 *   - names sorted high -> low
 *
 * Uses only array methods (reduce, map, filter, sort) — no manual loops.
 */
const PASS_THRESHOLD = 60;

function printGradebook(students) {
  if (!Array.isArray(students) || students.length === 0) {
    console.log("No students to report on.");
    return;
  }

  // Class average
  const total = students.reduce((sum, s) => sum + s.score, 0);
  const average = total / students.length;

  // Highest / lowest scorer
  const highest = students.reduce((top, s) => (s.score > top.score ? s : top));
  const lowest = students.reduce((low, s) => (s.score < low.score ? s : low));

  // Pass rate
  const passCount = students.filter((s) => s.score >= PASS_THRESHOLD).length;
  const passRate = (passCount / students.length) * 100;

  // Names sorted high -> low (sort a copy so we don't mutate the input)
  const sortedNames = [...students]
    .sort((a, b) => b.score - a.score)
    .map((s) => s.name);

  console.log("===== Gradebook Report =====");
  console.log(`Class Average : ${average.toFixed(2)}`);
  console.log(`Highest Scorer: ${highest.name} (${highest.score})`);
  console.log(`Lowest Scorer : ${lowest.name} (${lowest.score})`);
  console.log(`Pass Rate     : ${passRate.toFixed(1)}%`);
  console.log(`Sorted (high to low): ${sortedNames.join(", ")}`);
  console.log("=============================");
}

// ---------------------------------------------------------------------
// Demo data / run
// ---------------------------------------------------------------------
const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 78 },
  { name: "Dana", score: 60 },
  { name: "Evan", score: 40 },
];

printGradebook(students);

module.exports = { printGradebook };
