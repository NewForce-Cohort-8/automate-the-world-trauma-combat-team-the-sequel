const cityData = {

    cityArray: [
        {
            image: "https://www.touropia.com/gfx/b/2018/06/natal.jpg",
            name: "Natal",
            discription: "Popular among Brazilian holidaymakers who flock here for the sea, sun and sand.",
            wiki: "https://en.wikipedia.org/wiki/Natal%2C_Rio_Grande_do_Norte"
        },
        {
            image: "https://www.touropia.com/gfx/b/2018/06/niteroi.jpg",
            name: "Niteroi",
            discription: "Taking the ferry over is a liberating experience, and the impressive saucer-like museum designed by Oscar Niemeyer looks amazing, even though there is not much inside.",
            wiki: "https://en.wikipedia.org/wiki/Niter%C3%B3i"
        },       {
            image: "https://www.touropia.com/gfx/b/2018/06/brasilia.jpg",
            name: "Brasilia",
            discription: "The capital was inaugurated in 1960 and this planned city was envisaged as the future of modern Brazil. It´s center has a futuristic feel to it, with modern architecture and a grid-like layout in the shape of airplane.",
            wiki: "https://en.wikipedia.org/wiki/Bras%C3%ADlia"
        }
    ]
}

export const getCity = () => {
    return cityData.cityArray.map(copyOfSingleCityArrayObject => ({...copyOfSingleCityArrayObject}))
}
