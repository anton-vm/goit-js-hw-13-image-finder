(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("lmye"),t("JBxO"),t("FdtR"),t("L1EO");var o="15591781-785a03c118f12007382b46528",s=1;document.querySelector("#root").insertAdjacentHTML("afterbegin",'<form class="search-form" id="search-form">\n    <input\n      type="text"\n      name="query"\n      autocomplete="off"\n      class="input"\n      placeholder="Search images..."\n    />\n  </form>'),console.log("hello");var c=function(e,n,t){var o="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+e+"&page="+n+"&per_page=12&key="+t;console.log(o),fetch(o).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.hits),e.hits.map((function(e){return t='  <li class="photo-items">\n <div class="photo-card">\n  <img src="'+(n=e).webformatURL+'" alt="" class="photo-img" />\n\n  <div class="stats">\n    <p class="stats-item">\n      <i class="material-icons">thumb_up</i>\n      '+n.likes+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">visibility</i>\n      '+n.views+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">comment</i>\n      '+n.comments+'\n    </p>\n    <p class="stats-item">\n      <i class="material-icons">cloud_download</i>\n      '+n.downloads+"\n    </p>\n  </div>\n</div>\n</li>\n",void document.querySelector(".photo-link").insertAdjacentHTML("beforeend",t);var n,t}))}))};function i(){var e=document.querySelector("input");s+=1,console.log(s),c(e.value,s,o),console.log("scroll"),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}var r=document.querySelector("#search-form");r.addEventListener("submit",(function(e){e.preventDefault(),console.log(e),document.querySelector(".photo-link")&&(document.querySelector(".photo-link").innerHTML="");var n=document.querySelector(".input").value;c(n,s,o)})),r.addEventListener("submit",(function(){var e=document.createElement("ul");e.classList.add("photo-link"),document.querySelector("#root").insertAdjacentElement("beforeend",e)})),r.addEventListener("submit",(function(){if(!document.querySelector(".more-btn")){document.querySelector("#root").insertAdjacentHTML("beforeend",'<button class="more-btn">Load more</button>'),document.querySelector(".more-btn").addEventListener("click",i)}}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7aba3a7304165df3a74d.js.map