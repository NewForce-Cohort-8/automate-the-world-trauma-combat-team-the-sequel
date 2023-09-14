import {getCelebs} from './nz-database.js'

export const celebList = () => {
    // Invoke the function that you imported from the database module
    const celebs = getCelebs()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="celebList">'

    // Create HTML representations of each fish here
    for (const singleCeleb of celebs) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="celeb-card">
            <div><img  class="celeb__image image--card" src="${singleCeleb.image}" /></div>
            <div class="celeb__name">${singleCeleb.name}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}