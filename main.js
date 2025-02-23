var models = [
  {
    name: "BMW Series 4",
    image: "img/bmw4.jpg",
    link: "https://www.bmw.com.tr/tr/all-models.html",
  },
  {
    name: "Audi A8",
    image: "img/a8.jpg",
    link: "https://www.audi.com.tr/tr/",
  },
  {
    name: "Porsche Cayenne",
    image: "img/cayenne.jpg",
    link: "https://www.porsche.com.tr/",
  },
  {
    name: "Ford Focus",
    image: "img/focus.jpg",
    link: "https://www.ford.com.tr/?utm_source=google-ads&utm_medium=pmax&utm_content=pmagoogle-ads&utm_campaign=awareness_0225_pc_tactical_ford_pro_iletisimi&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0gRqAkIwUdRKXdaFNcFyPCqwkpc_Ev9prFRB_Pxk7OqZzyMCUAoIAaAgXwEALw_wcB",
  },
  {
    name: "Mercedes G",
    image: "img/mercedesG.jpg",
    link: "https://www.mercedes-benz.com.tr/passengercars/cars-guide/offers.html?gagcmid=GA_20739445150_155538493575_679161451432&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0GE2tX3Op5cFZYMtBNbOa7DIBlVzcwKbZIbIG_CHUW4i_2KEdKKisaAjIhEALw_wcB&gclsrc=aw.ds",
  },
  {
    name: "Renault Talisman",
    image: "img/talisman.jpg",
    link: "https://www.renault.com.tr/",
  },
  {
    name: "Renault Megane",
    image: "img/megan4.jpg",
    link: "https://www.renault.com.tr/",
  },
  {
    name: "BMW X5s",
    image: "img/x5.jpg",
    link: "https://www.bmw.com.tr/tr/all-models.html",
  },
  {
    name: "Volvo S90",
    image: "img/s90.jpg",
    link: "https://www.volvocars.com/tr/",
  },
];

var index = 0;
var slideCount = models.length;
var interval;

var settings = {
  duration: "3000",
  random: false,
};

init(settings);

document.querySelector(".fa-circle-left").addEventListener("click", () => {
  index--;
  showSlide(index);
  console.log(index);
});

document.querySelector(".fa-circle-right").addEventListener("click", () => {
  index++;
  showSlide(index);
  console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", () => {
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", () => {
        init(settings);
    })
})

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
    } else {
      // artan index
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index)
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
