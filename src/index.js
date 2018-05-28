import './stylesheets/styles.css';

const dropArea = document.querySelector('.drop-area');

window.addEventListener('drop', e => e.preventDefault());

window.addEventListener('dragover', e => e.preventDefault());

dropArea.addEventListener('dragenter', function(event) {
  this.classList.remove('empty');
  this.classList.add('full');
});

dropArea.addEventListener('dragleave', function(event) {
  this.classList.remove('full');
  this.classList.add('empty');
});
