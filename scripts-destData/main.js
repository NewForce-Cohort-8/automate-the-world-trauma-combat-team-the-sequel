import { getCountrys } from "./database.js";
    const allCountrys = getCountrys()

    for (const singleCountry of allCountrys) {
        console.log;{singleCountry}
    }


    // Imported Function that returns array values in a string of HTML
    import { countryList } from "./countrylist.js";


    // !!!!!  Home page class selector goes in querySelector !!!!!
    const parentHTMLElement = document.querySelector("#destination-cards")
parentHTMLElement.innerHTML = countryList()
