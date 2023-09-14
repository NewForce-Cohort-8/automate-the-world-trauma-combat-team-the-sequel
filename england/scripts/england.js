import { CityList } from "./cities.js";
import { CelebList } from "./celebs.js";
import { LandmarksList } from "./landmarks.js";

const cityHTML = document.querySelector(".city-list");
const celebHTML = document.querySelector(".celeb-list");
const landmarkHTML = document.querySelector(".landmark-list");

cityHTML.innerHTML += CityList();
celebHTML.innerHTML += CelebList();
landmarkHTML.innerHTML += LandmarksList();