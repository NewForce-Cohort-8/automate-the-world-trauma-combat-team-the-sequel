///// Celebrity Import from Celeb Database
////
//

import { getCeleb } from "./celebrities/celebrityDataProvider.js";

export let celebList = () => {
    let allCelebs = getCeleb();
    let celebHtmlString = "";
    for (let singleCelebObject of allCelebs) {
        celebHtmlString += `<div class="celeb-card">
        <img class="celeb-image" src=${singleCelebObject.image}>
        <p class="celeb-name">${singleCelebObject.celebName}</P>
            <ul>
                <li id="celeb-decription"> ${singleCelebObject.knownFor}</li>
            </ul>
        </div>`;
    }
    return celebHtmlString;
}

let newSectionForCelebList = document.querySelector(".celeb-list");
newSectionForCelebList.innerHTML = celebList();


// Landmark Import From Landmark Database 
/////
////
//

import { getLandmark } from "./landmarks/landmarkDataProvider.js";

export let landmarkList = () => {
    let allLandmarks = getLandmark();
    let landmarkHtmlString = "";
    for (const singleLandmarkObject of allLandmarks) {
        landmarkHtmlString += `<div class="landmark-card">
        <img class="landmark-image" src=${singleLandmarkObject.imgae} >
        <p class="landmark-name">${singleLandmarkObject.name}</P>
            <ul> 
                <li id="landmark-description"> ${singleLandmarkObject.description}</li>
            </ul>
        </div>`;
    }
    return landmarkHtmlString;
}
let newSectionForLandmarkList = document.querySelector(".landmark-list")
newSectionForLandmarkList.innerHTML = landmarkList();


///// City Import from City Database
////
////
///

import {getCity } from "./cities/cityDataProvider.js";

export let cityList = () => {
    let allCity = getCity();
    let cityHtmlString = "";
    for (const singleCityObject of allCity) {
        cityHtmlString += `<div class="city-card">
        <img class="city-image"src= ${singleCityObject.image}>
       <p class="city-name"> ${singleCityObject.city} </p>
            <ul> 
                <li id="city-decription">${singleCityObject.detail}</li>
            </ul>
            <a href=${singleCityObject.link}>More Info</a>
            
        </div>`;
    }
    return cityHtmlString;
}
let newSectionForCityList = document.querySelector(".city-list")
newSectionForCityList.innerHTML = cityList();