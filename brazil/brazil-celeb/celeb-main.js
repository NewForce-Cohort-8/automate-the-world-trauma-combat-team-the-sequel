import { getCeleb } from "./celeb-data.js";
    const allCelebs = getCeleb()

    for (const singleCeleb of allCelebs) {
        console.log;{singleCeleb}
    }


  
import { celebList } from "./celeb-list.js";


    
    const parentHTMLElement = document.querySelector(".celeb-list")
    parentHTMLElement.innerHTML = celebList()
