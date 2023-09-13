const celebData = {

    celebArray: [ 
        {
            image: "https://celebmafia.com/wp-content/uploads/2019/03/morena-baccarin-project-runway-premiere-in-new-york-5.jpg",
            name: "Morena Setta Baccarin",
            discription: "Know for her stunning beauty and acting skils she play in hits such as Deadpool, Firefly, Homland, and Gotham. She was born June 2, 1979 in Rio de Janeiro, Brazil."
        },
         {
            image: "https://media.elegantcms.io/a/96dc72d1-4d96-40b8-a3bd-cd44c423ca4b/87d71980-6f9a-47ab-bfcb-aea7f749bcdb/1500419978/o/inocente.jpg?1500419978",
            name: "Guto Inocente",
            discription: "Is a Brazilian professional mixed martial artist and kickboxer. He is a former five-time Brazilian Kickboxing Champion, a three-time Pan-American Champion, and a three-time South American Champion, among other titles."
        },
         {
            image: "https://media1.popsugar-assets.com/files/thumbor/_V5v62I24DQRwBvq7X8awH9pXhI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/02/694/n/1922153/9451756383f01852_thumb_temp_image151103651417533388/i/Alessandra-Ambrosio-Victoria-Secret-Fashion-Show-2014.jpg",
            name: "Alessandra Ambrosio",
            discription: " is a Brazilian model, actress, fashion designer, and businesswoman, mostly known for her work with Victoria’s Secret as an angel. She has also worked with many international brands, such as Armani, Ralph Lauren, Dior, etc."
        }
    ]
}

export const getCeleb = () => {
    return celebData.celebArray.map(copyOfSingleCelebArrayObject => ({...copyOfSingleCelebArrayObject}))
}
// Random
