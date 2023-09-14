// database: information for webpage
// made an object to catch all information and store in arrays.
const database = {
    countries: [],
    celebs: [],
    landmarks: [],
    cities: [],
 }
 
//  created functions to push data to empty arrays
 function makeCountry(image, name){
     const country= {
         image: image,
         name: name,
     };
     database.countries.push(country);
 }

 function makeCeleb(image, name){
    const celeb= {
        image: image,
        name: name,
    };
    database.celebs.push(celeb);
}

function makeLandmark(description, highlights, locations, more){
    const landmark= {
        description: description,
        highlights: highlights,
        locations: locations,
        more: more
    };
    database.landmarks.push(landmark);
}

function makeCity(image, name, link){
    const city= {
        image: image,
        name: name,
        link: link
    };
    database.cities.push(city);
}

// used function to store specific data into arrays
makeCountry(
    "https://media.cntraveller.com/photos/611bf772db797d0116fd53a3/4:3/w_2664,h_1998,c_limit/mt-cook-south-island-new-zealand-gettyimages-100482504.jpg",
    "New Zealand"
)

makeCeleb(
    "https://cdn-boial.nitrocdn.com/lrJSTMUhHaOSnJLNCZvsPgAAIjWcEmgs/assets/images/optimized/rev-ae7eccd/nzpocketguide.com/wp-content/uploads/2019/10/new-zealand-celebrities-nz.jpg",
    "Lorde"
)

makeCeleb(
    "https://cdn.vox-cdn.com/thumbor/_6Orh74ogydf3SrPU8N8apUrWG8=/0x0:2048x1365/1200x0/filters:focal(0x0:2048x1365):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21784622/c99a4e6772fbfa5192e307182949dcbc.jpg",
    "Russell Crowe"
)

makeCeleb(
    "https://cdn-boial.nitrocdn.com/lrJSTMUhHaOSnJLNCZvsPgAAIjWcEmgs/assets/images/optimized/rev-ae7eccd/nzpocketguide.com/wp-content/uploads/2014/12/external-content.duckduckgo.jpg",
    "Martin Henderson"
)

makeLandmark(
    "A land of beauty and adventure, New Zealand is home to incredible activities worthy of a place on anyone's bucket list.",
    "The highlight of New Zealand is it's natural beauty, make sure to go stargazing, visit the beaches, and go whale watching!",
    "When you're in New Zealand you MUST visit Hobbiton, Kaikoura, Waitmo Caves, and the Milford Sound!",
    "Visit New Zealand today!"

)

makeCity(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Auckland_skyline_from_harbor_bridge%2C_20_September_2019.jpg/278px-Auckland_skyline_from_harbor_bridge%2C_20_September_2019.jpg",
    "Auckland",
    "https://en.wikipedia.org/wiki/Auckland"
)



//  exporting values from array to use in HTML

export const getCountry = () => {
    return database.countries.map(copyOfSingleCountryObject => ({...copyOfSingleCountryObject}))
}

export const getCelebs = () => {
    return database.celebs.map(copyOfSingleCelebObject => ({...copyOfSingleCelebObject}))
}

export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}

export const getCities = () => {
    return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}