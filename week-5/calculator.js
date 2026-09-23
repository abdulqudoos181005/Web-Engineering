/**
 * calculateBill
 * Splits a bill (plus tip) evenly among a number of people.
 *
 * @param {number} amount      - The bill amount before tip. Must be a positive number.
 * @param {number} [tipPercent=15] - Tip percentage (e.g. 10 for 10%). Defaults to 15.
 *                                    Must be a non-negative number.
 * @param {number} people      - Number of people splitting the bill. Must be a positive integer.
 * @returns {object} result    - { originalAmount, tipPercent, tipAmount, total, people, perPerson }
 * @throws {Error} if any argument is invalid
 */
function calculateBill(amount, tipPercent = 15, people = 1) {
  // --- validate amount ---
  if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
    throw new Error(
      `Invalid bill amount: expected a positive number, got ${JSON.stringify(amount)}`
    );
  }

  // --- validate tipPercent (Task 4: reject non-number tipPercent) ---
  if (typeof tipPercent !== "number" || Number.isNaN(tipPercent) || tipPercent < 0) {
    throw new Error(
      `Invalid tip percent: expected a non-negative number, got ${JSON.stringify(tipPercent)}`
    );
  }

  // --- validate people ---
  if (typeof people !== "number" || !Number.isInteger(people) || people <= 0) {
    throw new Error(
      `Invalid number of people: expected a positive whole number, got ${JSON.stringify(people)}`
    );
  }

  const tipAmount = amount * (tipPercent / 100);
  const total = amount + tipAmount;
  const perPerson = total / people;

  return {
    originalAmount: amount,
    tipPercent,
    tipAmount: Number(tipAmount.toFixed(2)),
    total: Number(total.toFixed(2)),
    people,
    perPerson: Number(perPerson.toFixed(2)),
  };
}

/**
 * formatBill (Task 4)
 * Turns a calculateBill() result into a readable, multi-line console string.
 *
 * @param {object} result - the object returned by calculateBill
 * @returns {string}
 */
function formatBill(result) {
  return [
    "----- Bill Summary -----",
    `Original amount : $${result.originalAmount.toFixed(2)}`,
    `Tip (${result.tipPercent}%)       : $${result.tipAmount.toFixed(2)}`,
    `Total           : $${result.total.toFixed(2)}`,
    `Split between   : ${result.people} people`,
    `Per person      : $${result.perPerson.toFixed(2)}`,
    "-------------------------",
  ].join("\n");
}

// ---------------------------------------------------------------------
// Demo / manual test run (this is what `node calculator.js` executes)
// ---------------------------------------------------------------------

// 1) Happy path: $2400 bill, 10% tip, split 3 ways
const happyResult = calculateBill(2400, 10, 3);
console.log("Happy path result:", happyResult);
console.log(formatBill(happyResult));

// 2) Failing call #1: bad amount (negative number)
try {
  calculateBill(-50, 10, 2);
} catch (err) {
  console.error("Error (bad amount):", err.message);
}

// 3) Failing call #2: people = 0
try {
  calculateBill(1000, 10, 0);
} catch (err) {
  console.error("Error (people = 0):", err.message);
}

// 4) Task 4 extra: default tip (no tipPercent passed -> should default to 15%)
const defaultTipResult = calculateBill(1000, undefined, 4);
console.log("\nDefault tip (15%) result:", defaultTipResult);
console.log(formatBill(defaultTipResult));

// 5) Task 4 extra: non-number tipPercent should be rejected
try {
  calculateBill(1000, "ten percent", 2);
} catch (err) {
  console.error("Error (non-number tipPercent):", err.message);
}

module.exports = { calculateBill, formatBill };
