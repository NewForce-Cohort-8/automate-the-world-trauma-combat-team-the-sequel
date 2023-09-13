import { getCountry } from './database.js'

const allCountries = getCountry()

for (const singleCountry of allCountries) {
    console.log(singleCountry)
}

import { getCelebs } from './database.js'

const allCelebs = getCelebs()

for (const singleCeleb of allCelebs) {
    console.log(singleCeleb)
}

import { getLandmarks } from './database.js'

const allLandmarks = getLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

import { getCities } from './database.js'

const allCities = getCities()

for (const singleCities of allCities) {
    console.log(singleCities)
}


import {countryList} from './countrylist.js'

let finalCountryList = document.querySelector('.country-list')

finalCountryList.innerHTML = countryList()


import {celebList} from './celeblist.js'

let finalCelebList = document.querySelector('.celeb-list')

finalCelebList.innerHTML = celebList()


import {landmarksList} from './landmarkslist.js'

let finalLandmarksList = document.querySelector('.landmark-list')

finalLandmarksList.innerHTML = landmarksList()


import {cityList} from './citylist.js'

let finalCityList = document.querySelector('.city-list')

finalCityList.innerHTML = cityList()