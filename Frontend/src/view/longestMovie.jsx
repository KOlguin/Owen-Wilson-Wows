import React, { useState, useEffect } from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import BreadcrumbCategory from '../Components/breadcrumbsForCategory'
import PosterCategory from '../Components/posterCategory'

import '../assets/styles/allMovies.css'

const LongestMovie = () => {

    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoadnig] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/longest-movie-duration-wow`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setMovie(data)
                    setIsLoadnig(false)
                })
                .catch((err) => {
                    console.log(err.message)
                })
            } catch (error) {
                console.error("Error al obtener las peliculas", error)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <Navbar />
            <BreadcrumbCategory categoryName={"La Película más Larga"} />
            <h1 className='categoryTitle'>Película con Mayor Duración</h1>
            <p className='categoryDescription'>Aquí encontraremos la película de mayor duración registrada en las cual el actor Owen Wilson ha dicho wow.</p>
            {
                isLoading ? 
                <p className='categoryLoading'>Cargando...</p> : 
                <PosterCategory {...movie} />
            }
            <Footer />
        </div>
    )
}

export default LongestMovie