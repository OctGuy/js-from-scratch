function getRandomColor() {
   const validLetters = '0123456789ABCDEF';
   let color = '#'; // hexcode prefix

   for (let i = 0; i < 6; i++) {
      color += validLetters[Math.floor(Math.random() * 16)];
   }
   return color;
}

document.getElementById('colorButton').addEventListener('click', () => {
   const randomColor = getRandomColor();
   document.body.style.backgroundColor = randomColor;
   document.getElementById('hexCode').textContent = randomColor;
});