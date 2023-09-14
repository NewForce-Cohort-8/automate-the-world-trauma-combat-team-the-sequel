// getCountrys function returns a copy of a copy of 
import { getCountrys } from "./database.js";

// Function returns values of Array in a string of HTML
export const countryList = () => {

    const countrys = getCountrys()

    
    let htmlString = '<article class="dest-list">'

    
    for (const country of countrys) {

        
        htmlString += `<section class="dest-card">
            <div> <a href="${country.Link}"><img class="dest__image" src="${country.image}" /></a></div>
            <div class="dest-name">  ${ country.Title}</div>

          </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}
