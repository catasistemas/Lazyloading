import { registerImage } from "./lazy.js";

const baseUrl = "https://randomfox.ca/";
const imagesMount = document.getElementById("images");

const min = 1;
const max = 123;
const randomNum = () => Math.floor(Math.random() * (max + 1 - min) + min);

//create a image

const createImgNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.width = "320";
  image.className = "mx-auto bg-gray-300 rounded-md";
  image.dataset.src = `${baseUrl}/images/${randomNum()}.jpg`;

  const grayBg = document.createElement("div");
  grayBg.className = "p-4";

  grayBg.appendChild(image);
  container.appendChild(grayBg);

  return container;
};

const nuevaImagen = createImgNode();
const addButton = document.getElementById("add");
const delButton = document.getElementById("clean");

const addImg = () => {
  const newImg = createImgNode();
  imagesMount.append(newImg);
  registerImage(newImg);
  totalImg++;
  impLog();
};

const delImg = () => {
  imagesMount.innerHTML = "";
  console.log("🦊Todas las imagenes han sido borradas🦊");
  console.log("-----------------------------------------");

  totalImg = 0;
  loadedImg = 0;
};

addButton.addEventListener("click", addImg);
delButton.addEventListener("click", delImg);
