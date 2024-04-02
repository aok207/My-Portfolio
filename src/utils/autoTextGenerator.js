const words = ["Web", "Software", "Python", "Php", "Frontend", "Backend", "Javascript"];
const typingDelay = 200;
const erasingDelay = 200;
// Delay between current and next text
const newLetterDelay = 1000;
let index = 0;
let charIndex = 0;

export default function generateText(typedTextEle) {
  if (words.length) {
    setTimeout(() => type(typedTextEle), newLetterDelay);
  }
}

function type(typedTextEle) {
  if (charIndex < words[index].length) {
    typedTextEle.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(() => type(typedTextEle), typingDelay);
  } else {
    setTimeout(() => erase(typedTextEle), newLetterDelay);
  }
}

function erase(typedTextEle) {
  if (charIndex > 0) {
    typedTextEle.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(() => erase(typedTextEle), erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(() => type(typedTextEle), typingDelay + 100);
  }
}