var movies = [
    {
        title: "Doubt",
        rating: "5.0",
        haveSeen: true
    },
    {
        title: "1917",
        rating: "4.2",
        haveSeen: true
    },
    {
        title: "Cats",
        rating: "1.5",
        haveSeen: false
    },
    {
        title: "Ponyo",
        rating: "4.7",
        haveSeen: true
    }
];


movies.forEach(function(i){
    if(i.haveSeen === true){
        console.log("You have watched " + "\"" + i.title + "\"" + " - " + i.rating + " stars")
    }
    else{
        console.log("You have not seen " + "\"" + i.title + "\"" + " - " + i.rating + " stars")
    }
});