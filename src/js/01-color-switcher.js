const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorInterval = null;

// Centrează butoanele pe ecran
const centerButtons = () => {
  const buttonsContainer = startButton.parentElement;
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.justifyContent = 'center';
  buttonsContainer.style.alignItems = 'center';
  buttonsContainer.style.height = '100vh'; // Înălțimea ocupă întreaga fereastră
  buttonsContainer.style.flexDirection = 'column'; // Butoanele sunt aranjate vertical
};

centerButtons();

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;

  colorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(colorInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
