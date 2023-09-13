let cityDatabase = {
cities: [
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/91YQehEioXL._AC_UL200_SR200,200_.jpg",
        city:"Paris",
        detail: "city where the tower thing is located at",
        link:"https://en.wikipedia.org/wiki/Paris"
    },
    {
        image:"https://wondrousdrifter.com/wp-content/uploads/2022/08/Reasons-to-visit-Lyon-France-200x200.jpg",
        city:"Lyon",
        detail: "A cool city in France that sounds like 'lion'.",
        link:"https://en.wikipedia.org/wiki/Lyon",
    },
    {
        image:"https://planetrail.co.uk/wp-content/uploads/Marseille-200x200.jpg",
        city:"Marseille",
        detail: "French city. ",
        link:"https://en.wikipedia.org/wiki/Marseille",
    }
]

}
export let getCity = () => {
    return cityDatabase.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}