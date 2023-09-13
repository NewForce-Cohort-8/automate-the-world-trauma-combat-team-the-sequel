let landmarkDatabase = {
    landmarks: [
        {
            imgae:"https://www.parisperfect.com/blog/wp-content/uploads/2021/08/paris-perfect-eiffel-tower-champs-de-mars-200x200.jpg",
            name:"Eiffle Tower",
            description: "This can be described as the historic french tower thing. Go visit it!  ",
            
        },
        {
            imgae:"https://cdn.britannica.com/02/121002-050-92DB902F/Louvre-Museum-pyramid-Paris-Pei-IM.jpg?w=200&h=200&c=crop",
            name:"Louvre Museum",
            description: "This is the historic museum of France that I can not pronounce",
            
        },
        {
            imgae:"https://fastly.4sqi.net/img/general/200x200/1929706_Lst9NYtk5erkIoFH_-2M8MaswmmTcNHGqP9lqXvqF_o.jpg",
            name:"Arc de Triomphe",
            description: "The cool historic arc made of some sort of french stone. ",
            
        }
    ]
}

export let getLandmark = () => {
    return landmarkDatabase.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}