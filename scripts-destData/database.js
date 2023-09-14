const countryData = {
    
   
    countryArray: [
        {
            image: "https://wallpaperaccess.com/full/216172.jpg",
            Title: "Brazil",
            Link: "brazil/brazil.html"
        } ,
        {
            image: "https://www.tripsavvy.com/thmb/sw4XwSeR4qLYUR0G12f5QtsEP10=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rural-scene-with-mountains-behind--kaikoura--gisborne--new-zealand-1016324114-19380fe292d94029932c37d19b82bda9.jpg",
            Title: "New Zealand" ,
            Link: "new-zealand/new-zealand.html"
        } ,
        {
            image: "https://www.planetware.com/photos-large/F/best-places-france-paris.jpg",
            Title: "France",
            Link: "france/franceIndex.html"
        } ,
        {
            image: "https://www.worldatlas.com/r/w1200/upload/fb/e3/da/shutterstock-1103219396.jpg",
            Title: "England",
            Link: "england/england.html"
        } ,
        {
            image: "https://images.summitmedia-digital.com/esquiremagph/images/gallery/6587/MAIN-china-tourist-destination.jpg",
            Title: "China",
            Link: "china/china.html"
        }

    ]
}


export const getCountrys = () => {
    return countryData.countryArray.map(copyOfSingleCountryArrayObject => ({...copyOfSingleCountryArrayObject}))
}

