// Source - https://stackoverflow.com/a/65994348
// Posted by Mylio Chang
// Retrieved 2026-05-07, License - CC BY-SA 4.0

function generateDelayDivCss() {
  let cssStrings = [1, 2, 3, 4, 5].map(
    (n, idx) =>
      `#divs div:nth-child(${idx + 1}) {
      animation-delay: ${idx * 4}s;
    }`
  );
  return cssStrings.join("");
}

// then append the css from the result of the generateDelayDivCss() to the document
// let css = generateDelayDivCss();
// create <style> element and append to document

let css = generateDelayDivCss();
let style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);