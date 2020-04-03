import './styles.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';



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
}

renderInputArea();

function createUl() {
  const ul = document.createElement('ul');
  ul.classList.add('photo-link');
  const place = document.querySelector('#root');
  place.insertAdjacentElement('beforeend', ul);
}


function searchData (e) {
  e.preventDefault()
  if (document.querySelector('.photo-link')){
    document.querySelector('.photo-link').innerHTML = ""
  }
  const input = document.querySelector('.input').value;
  apiService(input, pageNumber, id);
};

const apiService = (search, pageNumber, key) => {
  const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${pageNumber}&per_page=12&key=${key}`;

  fetch(URL)
    .then(res => res.json())
    .then(data => {

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

// function showPicture(event) {
//   const instance = basicLightbox.create(`
//     <img src="${event.target.largeImageURL}" width="800" height="600">
// `)
// instance.show()
// }



// const pictureClick = document.querySelector('body')

// pictureClick.addEventListener('click', showPicture);

// function showPicture(event) {
//     if (event.target.nodeName === 'IMG') {
//         const imageBig = event.target.dataset.source;
//         console.log(event.target.dataset.source);
//         console.log(event);
//         basicLightbox.create(`
//         <img src="${event.target.dataset.source}">
//     `).show()
//     }
// }

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
form.addEventListener('submit', createUl);
form.addEventListener('submit', generateButton);



