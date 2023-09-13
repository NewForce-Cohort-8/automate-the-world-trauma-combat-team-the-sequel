import {getCountry} from './database.js'

export const countryList = () => {
    // Invoke the function that you imported from the database module
    const countries = getCountry()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="countryList">'

    // Create HTML representations of each fish here
    for (const singleCountry of countries) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="country-card">
            <div><img  class="country__image image--card" src="${singleCountry.image}" /></div>
            <div class="country__name">${singleCountry.name}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}