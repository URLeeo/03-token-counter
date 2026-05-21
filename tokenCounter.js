function cleanText(text) {
  return text.trim();
}

console.log(cleanText("  Hello world  "));

function splitIntoWords(text) {
  return text.split(" ");
}

console.log(splitIntoWords("The quick brown fox"));

function removeEmptyWords(words) {
  return words.filter(function(word) {
    return word !== "";
  });
}

const messy = splitIntoWords("Hello   world");
console.log(messy);
console.log(removeEmptyWords(messy));

function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}

const words = ["The", "quick", "brown", "fox"];
console.log(estimateTokens(words));

function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);
  return estimateTokens(filtered);
}

console.log(countTokens("Hello"));
console.log(countTokens("Hello, world!"));
console.log(countTokens("The quick brown fox jumps over the lazy dog"));
console.log(countTokens("  I am learning JavaScript   today  "));

// Bonus challenge 1
function estimateCost(tokenCount, pricePerMillionTokens) {
  return (tokenCount / 1000000) * pricePerMillionTokens;
}

const fiveHundredWordEmailTokens = Math.ceil(500 * 0.75);
console.log(estimateCost(fiveHundredWordEmailTokens, 5));

// Bonus challenge 2
function characterCount(text) {
  return cleanText(text).length;
}

console.log(characterCount("  I am learning JavaScript today  "));

// Bonus challenge 3
console.log(countTokens("Salam, mən JavaScript öyrənirəm"));

const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

inputText.addEventListener("input", function () {
  const tokenCount = countTokens(inputText.value);
  result.textContent = "Estimated tokens: " + tokenCount;
});