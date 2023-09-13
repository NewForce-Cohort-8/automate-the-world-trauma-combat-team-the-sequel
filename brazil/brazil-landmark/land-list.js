import { getland } from "./land-data.js";


export const landList = () => {

    const lands = getland()

    ////////// INPUT CLASSES///////////////////////
    let htmlString = '<article class="     ">'

    
    for (const land of lands) {

        
        htmlString += `<section class="      ">
            <div><img class="     " src="${land.image}" /></div>
            <div class="     "> <span>Name:</span> ${ land.name}</div>
            <div class="     "> <span>Discription:</span> ${land.discription}</div>
           
            </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}
