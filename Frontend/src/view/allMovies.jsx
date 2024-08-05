import React, { useState, useEffect } from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import BreadcrumbCategory from '../Components/breadcrumbsForCategory'
import ListCategory from '../Components/listCategory'

import '../assets/styles/allMovies.css'

const AllMovies = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoadnig] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/all-movies`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setMovies(data)
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
            <BreadcrumbCategory categoryName={"Todas las Películas"} />
            <h1 className='categoryTitle'>Todas las Películas</h1>
            <p className='categoryDescription'>Aquí encontraremos todas las películas registradas en las cuales el actor Owen Wilson ha dicho wow.</p>
            {
                isLoading ? 
                <p className='categoryLoading'>Cargando...</p> : 
                <ListCategory info={movies} />
            }
            <Footer />
        </div>
    )
}

export default AllMovies