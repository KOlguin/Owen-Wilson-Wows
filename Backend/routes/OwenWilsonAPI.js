var express = require("express");
var axios = require("axios");

var router = express.Router();

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

module.exports = router;