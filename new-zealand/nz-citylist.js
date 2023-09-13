import {getCities} from './nz-database.js'

export const cityList = () => {
    // Invoke the function that you imported from the database module
    const cities = getCities()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="cityList">'

    // Create HTML representations of each fish here
    for (const singleCity of cities) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="city-card">
            <div><img  class="city__image image--card" src="${singleCity.image}" /></div>
            <div class="city__name">${singleCity.name}</div>
            <div class="city__link"> <a href="${singleCity.link}"> Check Out Auckland! </a> </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

