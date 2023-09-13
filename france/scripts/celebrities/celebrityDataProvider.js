let celebDataBase ={
        celebs: [
        {
            image:"https://evalyndunngallery.com/wp-content/uploads/2021/01/OIP.jpg",
            celebName:"Joan of Arc",
            knownFor: "Probably chosen by God to Lead the french army"

        },
        {
            image:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Nostradamus-frame.jpg",
            celebName:"Nostradamus",
            knownFor: "French Philosopher with cool name."

        },
        {
            image:"https://static.wikia.nocookie.net/prowrestling/images/3/39/AndreTheGiant.png",
            celebName:"Andre The Giant ",
            knownFor: "French Wrestler "

        }

    ]

}

export let getCeleb = () => {
    return celebDataBase.celebs.map(copyOfSingleCelebObject => ({... copyOfSingleCelebObject}))
}