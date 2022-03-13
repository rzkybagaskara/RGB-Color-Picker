// Capture the HTML Element
const redSlider = document.querySelector('input[name=redSlider]');
const greenSlider = document.querySelector('input[name=greenSlider]');
const blueSlider = document.querySelector('input[name=blueSlider]');
let resultSlider = document.getElementById('result-rgb');

// Kasih event
redSlider.addEventListener('input', function () {
  // Memberikan value ke masing2 nilai RGB
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  //   Ganti warna
  resultSlider.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';

  // Ganti teks RGB
  let innerTextRGB = document.querySelector('.value-rgb h3');
  innerTextRGB.innerHTML = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';
});

greenSlider.addEventListener('input', function () {
  // Memberikan value ke masing2 nilai RGB
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  //   Ganti warna
  resultSlider.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';

  // Ganti teks RGB
  let innerTextRGB = document.querySelector('.value-rgb h3');
  innerTextRGB.innerHTML = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';
});

blueSlider.addEventListener('input', function () {
  // Memberikan value ke masing2 nilai RGB
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  //   Ganti warna
  resultSlider.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';

  // Ganti teks RGB
  let innerTextRGB = document.querySelector('.value-rgb h3');
  innerTextRGB.innerHTML = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';
});
