const countryData = {
    
    ////// TEMPORARY VALUES - INPUT YOUR COUNTRY ///////////
    countryArray: [
        {
            image: "https://wallpaperaccess.com/full/216172.jpg",
            Title: "Brazil",
            Landmark: "-Landmark-",
            Link: "brazil/brazil.html"
        } ,
        {
            image: "-Image-",
            Title: "-Title-" ,
            Landmark: "-Landmark-",
            Link: "-Link-"
        } ,
        {
            image: "-Image-",
            Title: "-Title-",
            Landmark: "-Landmark-",
            Link: "-Link-"
        } ,
        {
            image: "-Image-",
            Title: "-Title-",
            Landmark: "-Landmark-",
            Link: "-Link-"
        } ,
        {
            image: "-Image-",
            Title: "-Title-",
            Landmark: "-Landmark-",
            Link: "-Link-"
        }

    ]
}


export const getCountrys = () => {
    return countryData.countryArray.map(copyOfSingleCountryArrayObject => ({...copyOfSingleCountryArrayObject}))
}

