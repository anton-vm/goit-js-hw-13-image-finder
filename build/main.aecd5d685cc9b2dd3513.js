(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("lmye"),n("JBxO"),n("FdtR"),n("L1EO"),n("dcBu"),n("uDJT");var o="15591781-785a03c118f12007382b46528",i=1;document.querySelector("#root").insertAdjacentHTML("afterbegin",'<form class="search-form" id="search-form">\n    <input\n      type="text"\n      name="query"\n      autocomplete="off"\n      class="input"\n      placeholder="Search images..."\n    />\n  </form>');var c=function(e,t,n){fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+e+"&page="+t+"&per_page=12&key="+n).then((function(e){return e.json()})).then((function(e){e.hits.map((function(e){return n='  <li class="photo-items">\n <div class="photo-card">\n  <img src="'+(t=e).webformatURL+'" alt="" class="photo-img" />\n\n  <div class="stats">\n    <p class="stats-item">\n      <i class="material-icons">thumb_up</i>\n      '+t.likes+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">visibility</i>\n      '+t.views+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">comment</i>\n      '+t.comments+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">cloud_download</i>\n      '+t.downloads+"\n    </p>\n  </div>\n</div>\n</li>\n",void document.querySelector(".photo-link").insertAdjacentHTML("beforeend",n);var t,n}))}))};function r(){var e=document.querySelector("input");i+=1,c(e.value,i,o),setTimeout((function(){window.scrollTo({top:+window.scrollY+700,behavior:"smooth"})}),1500)}var s=document.querySelector("#search-form");s.addEventListener("submit",(function(e){e.preventDefault(),document.querySelector(".photo-link")&&(document.querySelector(".photo-link").innerHTML="");var t=document.querySelector(".input").value;c(t,i,o)})),s.addEventListener("submit",(function(){var e=document.createElement("ul");e.classList.add("photo-link"),document.querySelector("#root").insertAdjacentElement("beforeend",e)})),s.addEventListener("submit",(function(){if(!document.querySelector(".more-btn")){document.querySelector("#root").insertAdjacentHTML("beforeend",'<button class="more-btn">Load more</button>'),document.querySelector(".more-btn").addEventListener("click",r)}}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.aecd5d685cc9b2dd3513.js.map