function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function isPalindrome(value) {
  const normalized = value.toLowerCase().replace(/\s+/g, "");
  return normalized === [...normalized].reverse().join("");
}

function countWords(sentence) {
  const trimmed = sentence.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

console.log('getInitials("Ayesha Khan"):', getInitials("Ayesha Khan"));
console.log('isPalindrome("Race car"):', isPalindrome("Race car"));
console.log('countWords("the quick brown fox"):', countWords("the quick brown fox"));
