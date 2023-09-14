import { getland } from "./land-data.js";


export const landList = () => {

    const lands = getland()

    ////////// INPUT CLASSES///////////////////////
    let htmlString = '<article class="     ">'

    
    for (const land of lands) {

        
        htmlString += `<section class="      ">
            <div><img class="     " src="${land.image}" /></div>
            <div class="     ">  ${ land.name}</div>
            <div class="     ">  ${land.discription}</div>
           
            </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}
