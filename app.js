// Optional: Change the text and button for each image
const overlays = document.querySelectorAll('.overlay');
overlays.forEach(overlay => {
  const title = overlay.querySelector('h2');
  const description = overlay.querySelector('p');
  const button = overlay.querySelector('button');
  overlay.parentNode.querySelector('img').addEventListener('mouseenter', () => {
    title.textContent = 'Spider-Man 3';
    description.textContent = 'New Description';
    button.textContent = 'New Button';
  });
});
