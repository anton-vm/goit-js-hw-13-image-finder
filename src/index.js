import './styles.css';
import formPicture from './templates/form.hbs'



const id = '15591781-785a03c118f12007382b46528';
let pageNumber = 1;


function searchData (e) {
  e.preventDefault()
  if (document.querySelector('.photo-link')){
    document.querySelector('.photo-link').innerHTML = ""
  }
  const input = document.querySelector('.input').value;
  apiService(input, pageNumber, id);
  document.querySelector('.input').value = ''
};



const apiService = (search, pageNumber, key) => {
  const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${pageNumber}&per_page=12&key=${key}`;

  fetch(URL)
    .then(res => res.json())
    .then(data => renderItem(data.hits)
    );
};

function renderItem(element) {

const item = formPicture(element)

  const place = document.querySelector('.photo-link');
  place.insertAdjacentHTML('beforeend', item);
}


function addPage() {
  const input = document.querySelector('input');
  pageNumber += 1;
  apiService(input.value, pageNumber, id);
  scroll()
}

let page = 0

function scroll() {
  setTimeout(() => {
    window.scrollTo({
      top: +window.scrollY + 700,
      behavior: 'smooth',
    });
  }, 1500);
}



const form = document.querySelector('#search-form');
form.addEventListener('submit', searchData);

const loadMore = document.querySelector('.more-btn');
loadMore.addEventListener('click', addPage)



