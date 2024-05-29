let currentIndex = 0;
const inner = document.querySelector(".carousel-inner");
const prevButton = document.getElementById("btn-prev");
const nextButton = document.getElementById("btn-next");
const indicatorsContainer = document.querySelector(".carousel-indicators");

function updateColumns() {
  const screenWidth = window.innerWidth;
  let columns = 1;

  if (screenWidth >= 1536) {
    columns = 4;
  } else if (screenWidth >= 1280) {
    columns = 5;
  } else if (screenWidth >= 1024) {
    columns = 4;
  } else if (screenWidth >= 768) {
    columns = 3;
  } else if (screenWidth >= 640) {
    columns = 2;
  }

  inner.style.setProperty("--columns", columns);
  updateIndicators();
}

let carouselData;

// Carga el archivo JSON
fetch("/components/carousel/carousel.json")
  .then((response) => response.json())
  .then((data) => {
    carouselData = data.carousel;
    buildCarousel();
  })
  .catch((error) => console.error("Error loading carousel data:", error));

function buildCarousel() {
  // Construye el carrusel basado en los datos cargados del JSON
  inner.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  carouselData.forEach((item, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");

    const link = document.createElement("a");
    link.href = item.href;
    link.target = item.target;

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;

    link.appendChild(image);
    carouselItem.appendChild(link);
    inner.appendChild(carouselItem);

    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = index;
    indicator.addEventListener("click", () => showItem(index));
    indicatorsContainer.appendChild(indicator);
  });

  updateColumns();
}

function showItem(index) {
  const offset = index * -100;
  inner.style.transform = `translateX(${offset}%)`;
  updateIndicatorsActive(index);
}

function updateIndicators() {
  const columns = parseInt(inner.style.getPropertyValue("--columns")) || 1;
  const items = document.querySelectorAll(".carousel-item");
  const totalPages = Math.ceil(items.length / columns);
  indicatorsContainer.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = i;
    indicator.addEventListener("click", () => showItem(i));
    indicatorsContainer.appendChild(indicator);
  }

  updateIndicatorsActive(currentIndex);
}

function updateIndicatorsActive(index) {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  if (indicators[index]) {
    indicators[index].classList.add("active");
  }
}

function next() {
  currentIndex++;
  const columns = parseInt(inner.style.getPropertyValue("--columns")) || 1;
  const items = document.querySelectorAll(".carousel-item");
  if (currentIndex >= Math.ceil(items.length / columns)) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function prev() {
  currentIndex--;
  const columns = parseInt(inner.style.getPropertyValue("--columns")) || 1;
  const items = document.querySelectorAll(".carousel-item");
  if (currentIndex < 0) {
    currentIndex = Math.ceil(items.length / columns) - 1;
  }
  showItem(currentIndex);
}

prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);

window.addEventListener("resize", updateColumns);
updateColumns();
showItem(currentIndex);
