const database = {
    cities: [
        {
            name: "London",
            link: "https://en.wikipedia.org/wiki/London",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Siege_of_London_%28MS_1168%29.jpg/170px-Siege_of_London_%28MS_1168%29.jpg"
        },

        {
            name: "Nottingham",
            link: "https://en.wikipedia.org/wiki/Nottingham",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Grand_coat_of_arms_of_Nottingham.svg/150px-Grand_coat_of_arms_of_Nottingham.svg.png"
        },

        {
            name: "Birmingham",
            link: "https://en.wikipedia.org/wiki/Birmingham",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Benjamin_Haydon_-_Meeting_of_the_Birmingham_Political_Union.jpg/220px-Benjamin_Haydon_-_Meeting_of_the_Birmingham_Political_Union.jpg"
        },

        {
            name: "Manchester",
            link: "https://en.wikipedia.org/wiki/Manchester",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Peterloo_Massacre.png/220px-Peterloo_Massacre.png"
        }
    ],

    celebs: [
        { 
            name: "Rowan Atkinson",
            born: "1955",
            location: "Consett, County Durham",
            description: "Uh duh he was frickin Mr. Bean. He did other stuff too but c'mon. It's Mr. Bean.",
            img: "https://i.ndtvimg.com/i/2017-03/rowan-atkinson_640x480_71490079191.jpg"
        },
        {
            name: "Graham Frederick Young",
            born: "1947",
            location: "Neasden, Middlesex",
            description: "He was a serial killer who was obsessed with poison and poisoning people, also known as The Teacup Poisoner. Charming lad, innit!",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Graham_Young.jpg/220px-Graham_Young.jpg"
        },
        {
            name: "John Winston Ono Lennon",
            born: "1940",
            location: "Liverpool",
            description: "This guy was pretty much the entire Beatles. George was cool too. Paul was kinda corny. Ringo was fine. But this John guy was really doing most of the work. At least the good stuff, anyway. He was very cool, too.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/John_Lennon_passport_photo_%28cropped%29.jpg/170px-John_Lennon_passport_photo_%28cropped%29.jpg"
        },
        {
            name: "Idrissa Akuna Elba",
            born: "1972",
            location: "London",
            description: "This guy is known primarily because he's wildly attractive. His attractiveness doesn't really know any bounds or limits, and that's a good reason to be as famous and rich as he is. I guess he also acts? I didn't know that, I was too busy staring into his dreamy eyes. Maybe I'll check out some of his work.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Idris_Elba-4580_%28cropped%29.jpg/220px-Idris_Elba-4580_%28cropped%29.jpg"
        }
    ],

    landmarks: [
        {
            name: "Stonehenge",
            location: "Wiltshire",
            cool: "Very Cool. Freakin' aliens might've built this thing. And it looks  awesome even if not. Yeah, that's cool.",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg"
        },

        {
            name: "Big Ben",
            location: "London",
            cool: "Sorta Cool. Looks nice but at the end of the day, it's a clock. I see   those all the time.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/220px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg"
        },
        
        {
            name: "Buckingham Palace",
            location: "London",
            cool: "Meh - it's kind of just a rich person's house. I've seen those before, too. Can't imagine it being very chill in there either.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg/1200px-Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg"

        },

        {
            name: "The Roman Baths",
            location: "Bath",
            cool: "Yes for sure, very cool, coolest rating possible. Don't know what that is since these are not quantified into numbers. But still. Yes. Top marks.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/250px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg"
        }
    ]
}

export const getCities = () => {
    return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}

export const getCelebs = () => {
    return database.celebs.map(copyOfSingleCelebObject => ({...copyOfSingleCelebObject}))
}

export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}