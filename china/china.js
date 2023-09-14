import { celebsList } from './celeblist.js'
import { citiesList } from './citylist.js'
import { landmarksList } from './landmarklist.js'

const parentHTMLElement = document.querySelector(".celeb-list")
const sonHTMLElement = document.querySelector(".city-list")
const daughterHTMLElement = document.querySelector(".landmark-list")

parentHTMLElement.innerHTML = celebsList()
sonHTMLElement.innerHTML = citiesList()
daughterHTMLElement.innerHTML = landmarksList()