const passwordChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
let includeSpecialChars = true;

function generatePassword(length) {
  let charSet = passwordChars;
  if (!includeSpecialChars) {
    charSet = passwordChars.slice(0, 62);
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}

const passwordLengthInput = document.getElementById("password-length");
const includeSpecialCharsRadio = document.getElementById("include");
const excludeSpecialCharsRadio = document.getElementById("exclude");
const generateButton = document.getElementById("generate-button");
const passwordOutput = document.getElementById("password");

includeSpecialCharsRadio.addEventListener("change", (event) => {
  includeSpecialChars = event.target.id === "include";
});

excludeSpecialCharsRadio.addEventListener("change", (event) => {
  includeSpecialChars = event.target.id === "include";
});

generateButton.addEventListener("click", () => {
  const passwordLength = Number(passwordLengthInput.value);
  const password = generatePassword(passwordLength);
  passwordOutput.textContent = password;
});