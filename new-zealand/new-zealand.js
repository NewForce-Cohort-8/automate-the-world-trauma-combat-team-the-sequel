import { getCountry } from './nz-database.js'

const allCountries = getCountry()

for (const singleCountry of allCountries) {
    console.log(singleCountry)
}

import { getCelebs } from './nz-database.js'

const allCelebs = getCelebs()

for (const singleCeleb of allCelebs) {
    console.log(singleCeleb)
}

import { getLandmarks } from './nz-database.js'

const allLandmarks = getLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

import { getCities } from './nz-database.js'

const allCities = getCities()

for (const singleCities of allCities) {
    console.log(singleCities)
}


import {countryList} from './nz-countrylist.js'

let finalCountryList = document.querySelector('.country-list')

finalCountryList.innerHTML = countryList()


import {celebList} from './celeblist.js'

let finalCelebList = document.querySelector('.celeb-list')

finalCelebList.innerHTML = celebList()


import {landmarkList} from './nz-landmarkslist.js'

let finalLandmarksList = document.querySelector('.landmark-list')

finalLandmarksList.innerHTML = landmarkList()


import {cityList} from './nz-citylist.js'

let finalCityList = document.querySelector('.city-list')

finalCityList.innerHTML = cityList()