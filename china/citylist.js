import { cityList } from "./database.js";

export const citiesList = () => {
    
    const cities = cityList()

    let htmlString = '<article class="cityList">'

    for (const singleCity of cities) {

        htmlString += `<section class="cities card">
            <div><img class="cities_image image--card" src="${singleCity.image}" /></div>
            <div class="cities_name">${singleCity.name}</div>
            <div class="cities_link"><a href="${singleCity.link}">Learn More Here</a></div>
            </section>
    `
        }
        htmlString += `</article>`

        return htmlString
}