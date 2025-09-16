// === Part 2: JavaScript Functions, Scope & Return Values ===
function calculateArea(width, height) {
  return width * height; // returns area
}

let globalMessage = "Global Scope Accessible";

function localScopeDemo() {
  let localMessage = "Local Scope Only";
  console.log(globalMessage); // ✅ works
}

// === Part 3: Combining JS + CSS Animations ===
const animatedBox = document.getElementById("animatedBox");
const triggerBtn = document.getElementById("triggerBtn");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function triggerAnimation() {
  animatedBox.classList.remove("animate");
  void animatedBox.offsetWidth; // restart animation trick
  animatedBox.classList.add("animate");
}

function showArea() {
  let width = 5, height = 10;
  let area = calculateArea(width, height);
  result.textContent = `Area of rectangle (${width} x ${height}) = ${area}`;
}

triggerBtn.addEventListener("click", triggerAnimation);
calculateBtn.addEventListener("click", showArea);

// === Modal Logic ===
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModal");

function openModal() {
  modal.classList.add("show");
}
function closeModalFunc() {
  modal.classList.remove("show");
}

openModalBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFunc();
});

// === Dark Mode Toggle ===
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
