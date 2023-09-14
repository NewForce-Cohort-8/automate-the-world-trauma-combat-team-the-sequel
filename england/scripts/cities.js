import { getCities } from "./database.js";

export const CityList = () => {
    const cities = getCities();
    let htmlString = `<h3>Nearby Cities</h3>
    `;
    for (const city of cities) {
        htmlString += `<div class="city">
        <li><strong>${city.name}</strong></li>
        <li><img src="${city.img}"></li>
        <li><a href="${city.link}" target="_blank">More information on ${city.name}</a></li>
        </div>
        `
    }

    return htmlString
}