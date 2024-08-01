var express = require("express");
var axios = require("axios");

var router = express.Router();

const firstElementWowList = "0";
// Total de wows registrados hasta 01/08/2024 = 91
const actualLengthWowList = 91;


router.get("/all-movies", async(req, res) => {
    try {
        const {data: movies} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/movies")

        res.json(movies);
    }
    catch (error) {
        console.log("Error al obtener todas las peliculas, ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
})

router.get("/all-directors", async(req, res) => {
    try {
        const {data: directors} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/directors")

        res.json(directors);
    }
    catch (error) {
        console.log("Error al obtener todos los directores, ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
})

router.get("/first-and-last-wow", async(req, res) => {
    try {
        
        const {data: firstWow} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/ordered/" + firstElementWowList)
        const {data: lastWow} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/ordered/" + (actualLengthWowList - 1))
        
        res.json(
            {
                firstWowOrdered: firstWow, 
                lastWowOrdered: lastWow
            });
    }
    catch (error) {
        console.log("Error al obtener todas las peliculas, ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
})

router.get("/median-wow", async(req, res) => {
    try {
        // Total de wows registrados hasta 01/08/2024 = 91
        // Mediana de wows = 91 / 2 = 45

        if (actualLengthWowList % 2 == 0) {
            var firstMedian = (actualLengthWowList - 1) / 2;
            var secondMedian = firstMedian + 1;

            const {data: firstMedianWow} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/ordered/" + firstMedian);
            const {data: secondMedianWow} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/ordered/" + secondMedian);

            res.json({medianData: [firstMedianWow, secondMedianWow]});

        } else {
            var median = (actualLengthWowList - 1) / 2; 
            const {data: medianWow} = await axios.get("https://owen-wilson-wow-api.onrender.com/wows/ordered/" + median);
        
            res.json({medianData: [medianWow]});
        }
        
    }
    catch (error) {
        console.log("Error al obtener todas las peliculas, ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
})

module.exports = router;