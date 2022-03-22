const text = document.getElementById('color');
const button = document.getElementById('button');

const codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const randomCode = () => {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += codes[Math.floor(Math.random() * codes.length)];
  }
  return hex;
};

button.addEventListener('click', () => {
  const colorCode = randomCode();
  text.innerText = colorCode;
  document.body.style.backgroundColor = colorCode;
});
