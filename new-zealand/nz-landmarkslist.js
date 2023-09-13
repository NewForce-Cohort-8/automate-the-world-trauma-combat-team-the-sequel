import {getLandmarks} from './nz-database.js'

export const landmarkList = () => {
    // Invoke the function that you imported from the database module
    const landmarks = getLandmarks()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="landmarkList">'

    // Create HTML representations of each fish here
    for (const singleLandmark of landmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="landmark-card">
            <div><img  class="landmark__description image--card" src="${singleLandmark.description}" /></div>
            <div class="landmark__highlights">${singleLandmark.highlights}</div>
            <div class="landmark__locations">${singleLandmark.locations}</div>
            <div class="landmark__more">${singleLandmark.more}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

