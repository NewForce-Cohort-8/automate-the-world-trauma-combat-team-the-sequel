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
            image: "http://images.china.cn/attachement/jpg/site1007/20141115/001ec949fb5915d1283b10.jpg",
            Title: "England" ,
            Landmark: "-Landmark-",
            Link: "england/england.html"
        } ,
        {
            image: "-Image-",
            Title: "France",
            Landmark: "-Landmark-",
            Link: "france/franceIndex.html"
        } ,
        {
            image: "-Image-",
            Title: "New Zealand",
            Landmark: "-Landmark-",
            Link: "new-zealand/new-zealand.html"
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

