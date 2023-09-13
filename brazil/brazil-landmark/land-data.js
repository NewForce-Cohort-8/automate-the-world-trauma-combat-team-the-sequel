const landData = {

    landArray: [
        {
            image: "https://www.thediscoveriesof.com/wp-content/uploads/2017/08/Iguazu-Falls-Close-Up-Brazil-Famous-Brazil-Landmarks.jpg",
            name: "Iguazu Falls",
            discription: "The Iguazu Falls (or Iguaçu Falls in Brazilian Portuguese) are a beautiful set of waterfalls on the Iguazu River at the meeting point of Brazil, Paraguay and Argentina and should be at the top of your South America bucket list. "
        },
        {
            image: "https://www.thediscoveriesof.com/wp-content/uploads/2017/08/Christ-the-Redeemer-Brazils-Famous-Landmarks-.jpg",
            name: "Christ the Redeemer",
            discription: "You can’t miss Christ the Redeemer in Rio de Janeiro. It’s one of the iconic Brazil monuments and the most famous statue in the country."
        },
        {
            image: "https://www.thediscoveriesof.com/wp-content/uploads/2017/08/The-View-at-Sunset-from-the-Sugar-Loaf-Mountain-Brazil.jpg",
            name: "Sugar Loaf Mountain/ Pao de Azucar",
            discription: "The Sugar Loaf Mountain (Pao de Azucar) is a peak in Rio de Janeiro and another of Brazil’s iconic landmarks. "
        },

       
    ]
}

export const getland = () => {
    return landData.landArray.map(copyOfSingleLandArrayObject => ({...copyOfSingleLandArrayObject}))
}
