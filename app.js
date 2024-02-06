const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
// section.className=''

const button = document.getElementById('toggle-visibility');

button.addEventListener('click', () => {
  /* if (section.className === 'goldenrod-bg visible') {
    section.className = 'goldenrod-bg invisible'
  } else {
    section.className = 'goldenrod-bg visible';
  } */
  section.classList.toggle('visible');
  section.classList.toggle('invisible');
});