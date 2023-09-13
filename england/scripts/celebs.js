import { getCelebs } from "./database.js";

export const CelebList = () => {
    const celebs = getCelebs();
    let htmlString = `<h3>Celebrities from England</h3>
    <p>England has lots of famous people, even though it's just a small little island in the greater scheme of things. Surprisingly, there's a ton of super duper famous people from there. There's also people that they consider famous that the rest of us are kind of like, "hmmm what?" But you could say that about anywhere, really.</p>
    `
    for (const celeb of celebs) {
        htmlString += `<div class="celeb">
        <li><strong>${celeb.name}</strong></li>
        <li><img src="${celeb.img}"></li>
        <li>Year Born: ${celeb.born}</li>
        <li>Born In: ${celeb.location}</li>
        <li>Why They Even Famous Tho: ${celeb.description}</li>
        </div>
        `
    }

    return htmlString
}