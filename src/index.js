import './styles.css';
// import apiService from './js/apiService'
// import photoForm from "./templates/picture-form.hbs"



const id = '15591781-785a03c118f12007382b46528';
let pageNumber = 1;


function renderInputArea() {
  const inputArea = `<form class="search-form" id="search-form">
    <input
      type="text"
      name="query"
      autocomplete="off"
      class="input"
      placeholder="Search images..."
    />
  </form>`;
  const place = document.querySelector('#root');
  place.insertAdjacentHTML('afterbegin', inputArea);
  console.log('hello');
}

renderInputArea();

function createUl() {
  const ul = document.createElement('ul');
  ul.classList.add('photo-link');
  const place = document.querySelector('#root');
  place.insertAdjacentElement('beforeend', ul);
}
// createUl ()



function searchData (e) {
  e.preventDefault()
  console.log(e);
  if (document.querySelector('.photo-link')){
    document.querySelector('.photo-link').innerHTML = ""
  }
  const input = document.querySelector('.input').value;
  apiService(input, pageNumber, id);
};

const apiService = (search, pageNumber, key) => {
  const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${pageNumber}&per_page=12&key=${key}`;
  console.log(URL);
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.hits);
      data.hits.map(el => renderItem(el));
    });
};

function renderItem(element) {
  const item = `  <li class="photo-items">
 <div class="photo-card">
  <img src="${element.webformatURL}" alt="" class="photo-img" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${element.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${element.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${element.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${element.downloads}
    </p>
  </div>
</div>
</li>
`;
  const place = document.querySelector('.photo-link');
  place.insertAdjacentHTML('beforeend', item);
}

function generateButton() {
  if (!document.querySelector('.more-btn')) {
    const btn = `<button class="more-btn">Load more</button>`;
    const place = document.querySelector('#root');
    place.insertAdjacentHTML('beforeend', btn);
    listenBtn();
  }
}

function listenBtn() {
  const btnListen = document.querySelector('.more-btn');
  btnListen.addEventListener('click', addPage);
}

// generateButton ()


function addPage() {
  const input = document.querySelector('input');
  pageNumber += 1;
  console.log(pageNumber);
  apiService(input.value, pageNumber, id);
  scroll()
}

function scroll() {
  console.log("scroll");
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

const form = document.querySelector('#search-form');
form.addEventListener('submit', searchData);
form.addEventListener('submit', createUl);
form.addEventListener('submit', generateButton);


