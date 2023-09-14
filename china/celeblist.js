import { celebList } from "./database.js";

export let celebsList = () => {
    
    const celebs = celebList()

    let htmlString = '<article class="celebList">'

    for (const singleCeleb of celebs) {

        htmlString += `<section class="celebs card">
            <div><img class="celebs_image image--card" src="${singleCeleb.image}" /></div>
            <div class="celebs_name">${singleCeleb.name}</div>
            <div class="celebs_descrip">${singleCeleb.descrip}</div>
            </section>
    `
        }
        htmlString += `</article>`

        return htmlString
}