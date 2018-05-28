import smiles from 'smiles';
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

dropArea.addEventListener('drop', event => {
  readFileContents(event.dataTransfer.files[0]).then(
    fileContents => {
      console.log(fileContents);
    },
    e => {
      console.log('error', e);
    }
  );
});

function readFileContents(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(event) {
      const smilesString = event.target.result.replace('\n', '');

      try {
        smiles.parse(smilesString);
        resolve(smilesString);
      } catch (e) {
        reject(e);
      }
    };
    reader.readAsText(file);
  });
}
