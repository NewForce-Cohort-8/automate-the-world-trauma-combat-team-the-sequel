import { landmarkList } from "./database.js";

export const landmarksList = () => {
    
    const landmarks = landmarkList()

    let htmlString = '<article class="landmarkList'

    for (const singleLandmark of landmarks) {

        htmlString += `<section class="landmarks card">
            <div><img class="landmarks_image image--card" src="${singleLandmark.image}" /></div>
            <div class="cities_name">${singleLandmark.name}</div>
            <div class="cities_descrip">${singleLandmark.descrip}</div>
            </section>
    `
        }
        htmlString += `</article>`

        return htmlString
}