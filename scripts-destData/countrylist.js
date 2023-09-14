// getCountrys function returns a copy of a copy of 
import { getCountrys } from "./database.js";

// Function returns values of Array in a string of HTML
export const countryList = () => {

    const countrys = getCountrys()

    
    let htmlString = '<article class="dest-list">'

    
    for (const country of countrys) {

        
        htmlString += `<section class="dest-card">
            <div><img class="dest__image" src="${country.image}" /></div>
            <div class="dest__title"> <span>title:</span> ${ country.Title}</div>
            <div class="dest__landmark"> <span>landmark:</span> ${country.Landmark}</div>
            <div><a href= "${country.Link}"> Learn More </a></div>

          </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}
