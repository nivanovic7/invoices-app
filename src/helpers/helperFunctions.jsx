export function capitalizeWord(word) {
  if (!word) return ""; // Return an empty string if input is falsy
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
