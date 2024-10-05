const form = document.querySelector("#form");
const input = document.querySelector("#form-input");

function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter email address");
  } else if (!isEmail(value)) {
    alert("Invalid email address,Try again..");
  } else {
    alert("Loading...");
    setTimeout(() => {
      window.location.href = "success.html";
    }, 1000);
  }
});
