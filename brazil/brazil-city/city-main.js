import { getCity } from "./city-data.js";
    const allCitys = getCity()

    for (const singleCity of allCitys) {
        console.log;{singleCity}
    }


  
import {cityList } from "./city-list.js";



    const parentHTMLElement = document.querySelector(".city-list")
    parentHTMLElement.innerHTML = cityList()
