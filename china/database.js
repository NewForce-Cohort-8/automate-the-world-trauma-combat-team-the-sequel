const database = {
    celebs: [
        {
            image: "https://th.bing.com/th/id/OIP.Y95Mc_QlQ0nCf1JlpzK07gHaFJ?pid=ImgDet&rs=1",
            name: "Jackie Chan",
            descrip: "We all know who and what Jackie Chan is about okay"
        },
        {
            image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4MjEyNTE4M15BMl5BanBnXkFtZTgwMzcyNDE0NDM@._V1_.jpg",
            name: "Liu Yifei",
            descrip: "Best known for the new Mulan movie"

        },
        {
            image: "https://staticg.sportskeeda.com/editor/2022/12/5b213-16705198193264-1920.jpg", 
            name: "赵喜娜",
            descrip: "WWE摔跤手和普通话大师。"
            

        } 
    ],
    cities: [
        {
            image: "https://www.beijingtour-guide.com/uploads/170709/2-1FF9120125403.jpg",
            name: "Beijing",
            link: "https://en.wikipedia.org/wiki/Beijing"
            
        },
        {
            image: "https://benjaminkocher.com/wp-content/uploads/2016/06/Fire-Mouth.jpg",
            name: "Wuhan",
            link: "https://en.wikipedia.org/wiki/Wuhan"
            

        },
        {
            image: "https://i.pinimg.com/originals/27/b2/9c/27b29c2d83378edd6dd308d813ea1633.jpg", 
            name: "Shanghai",
            link: "https://en.wikipedia.org/wiki/Shanghai"
            

        }
    ],
    landmarks: [
        {
            image: "https://i.redd.it/go7qftwoimh21.jpg",
            name: "The Wall of China",
            descrip: "Yup, that's a wall alright."
            
        },
        {
            image: "https://th.bing.com/th/id/OIP.aah7PEJz97BpFHRjAH6D2gHaLH?pid=ImgDet&rs=1",
            name: "Leshan Giant Buddha",
            descrip: "Truly the best feet pics there are."
            

        },
        {
            image: "https://cdn.audleytravel.com/-/-/79/245092040066210246084134084120024103122218203223.jpg", 
            name: "The Terra Cotta Army",
            descrip: "Taking an army with you to the afterlife, so dope."
            

        }
    ],
}

export const celebList = () => {
    return database.celebs.map(copyOfSingleCelebsObject => ({...copyOfSingleCelebsObject}))
}
export const cityList = () => {
    return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}
export const landmarkList = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}