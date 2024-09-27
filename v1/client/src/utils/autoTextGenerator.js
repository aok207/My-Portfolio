const words = ["Web", "Software", "Python", "Php", "Frontend", "Backend", "Javascript", "Fullstack"];
const typingDelay = 100;
const erasingDelay = 100;
// Delay between current and next text
const newLetterDelay = 1000;

let typedTextSpanEle;

let index = 0;
let charIndex = 0;

export default function generateText(typedTextEle) {
  typedTextSpanEle = typedTextEle;

  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
}

function type() {
  if (charIndex < words[index].length) {
    typedTextSpanEle.textContent += words[index].charAt(charIndex);

    charIndex++;

    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpanEle.textContent = words[index].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(erase, erasingDelay);
  } else {
    index++;

    if (index >= words.length) {
      index = 0;
    }

    setTimeout(type, newLetterDelay + 10); 
  }
}



