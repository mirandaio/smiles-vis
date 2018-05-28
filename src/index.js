import './stylesheets/styles.css';

window.addEventListener('drop', e => {
  e.preventDefault();
});

window.addEventListener('dragover', e => {
  e.preventDefault();
});

const aspirin = 'O=C(Oc1ccccc1C(=O)O)C 0';
console.log('hey there');
