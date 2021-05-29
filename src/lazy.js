const isIntersecting = (entry) => {
  return entry.isIntersecting; // true dentro de la pantalla
};

const loadImage = (entry) => {
  const container = entry.target; // container (div)
  const image = container.querySelector("img");
  const url = image.dataset.src;
  //load image
  image.src = url;
  loadedImg++;
  impLog();

  // des registra la imagen (unlisten)
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

//
export const registerImage = (image) => {
  //intersectaionObserver -> observer (image)
  observer.observe(image);
};
