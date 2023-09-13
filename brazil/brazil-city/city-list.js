import { getCity } from "./city-data.js";


export const cityList = () => {

    const citys = getCity()

    ////////// INPUT CLASSES///////////////////////
    let htmlString = '<article class="       ">'

    
    for (const city of citys) {

        
        htmlString += `<section class="city">
            <div><img class="        " src="${city.image}" /></div>
            <div class="  city-name   "> <span>Name:</span> ${ city.name} CLICK ME</div>
            <div class="  city-discript   "> <span>Discription:</span> ${city.discription}</div>
            <div><a href="${city.wiki}">${city.name}</a><div>
            
            </section>
         `
        }
    htmlString += `</article>`
    return htmlString
}
