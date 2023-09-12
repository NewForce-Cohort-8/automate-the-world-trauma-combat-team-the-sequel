const database = {
    country: [],
    celebs: [],
    landmarks: [],
    cities: [],
 }
 
 function makeCountry(image, name){
     const country= {
         image: image,
         name: name,
     };
     database.country.push(country);
 }

 function makeCelebs(image, name){
    const celeb= {
        image: image,
        name: name,
    };
    database.celebs.push(celeb);
}

function makeLandmarks(description, highlights, locations, more){
    const landmark= {
        description: description,
        highlights: highlights,
        locations: locations,
        more: more
    };
    database.landmarks.push(landmark);
}

function makeCities(image, name, link){
    const city= {
        image: image,
        name: name,
        link: link
    };
    database.cities.push(city);
}

