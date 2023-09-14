import { getLandmarks } from "./database.js";

export const LandmarksList = () => {
    const landmarks = getLandmarks();
    let htmlString = `<h3>Notable Landmarks</h3>
    `
    for (const landmark of landmarks) {
        htmlString += `<div class="landmark">
        <li><strong>${landmark.name}</strong></li>
        <li><img src="${landmark.img}"></li>
        <li>Location: ${landmark.location}</li>
        <li>Is It Even Cool Though?: ${landmark.cool}</li>
        </div>`
    }

    return htmlString
}