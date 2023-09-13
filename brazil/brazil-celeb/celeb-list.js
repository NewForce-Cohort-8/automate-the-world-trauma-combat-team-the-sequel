 import { getCeleb } from "./celeb-data.js";


export const celebList = () => {

    const celebs = getCeleb()

    ////////// INPUT  CLASSES///////////////////////
    let htmlString = '<article class="       ">'

    
    for (const celeb of celebs) {

        
        htmlString += `<section class="       ">
            <div><img class="    " src="${celeb.image}" /></div>
            <div class="    "> <span>Name:</span> ${ celeb.name}</div>
            <div class="    "> <span>Discription:</span> ${celeb.discription}</div>
           
            </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}
