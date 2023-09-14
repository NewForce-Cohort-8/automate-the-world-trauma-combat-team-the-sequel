import { getland } from "./land-data.js";
    const allLands = getland()

    for (const singleLand of allLands) {
        console.log;{singleLand}
    }


  
    import { landList } from "./land-list.js";


    
    const parentHTMLElement = document.querySelector(".landmark-list")
    parentHTMLElement.innerHTML = landList()
