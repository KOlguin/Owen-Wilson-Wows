import React, { useState, useEffect } from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import BreadcrumbCategory from '../Components/breadcrumbsForCategory'
import WowsCategory from '../Components/wowsCategory'

import '../assets/styles/firstandLast.css'

const FirstAndLast = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoadnig] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/first-and-last-wow`)
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
                console.error("Error al obtener la información de las peliculas", error)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <Navbar />
            <BreadcrumbCategory categoryName={"Primera y Ultima Película"} />
            <h1 className='categoryTitle'>Primera y Ultima Película</h1>
            <p className='categoryDescription'>Aquí encontraremos la primera y última película de las que se tiene registro, donde el actor Owen Wilson dice wow junto con datos relevantes de este.</p>
            {
                isLoading ? 
                <p className='categoryLoading'>Cargando...</p> : 
                <>
                    <h3 className='subcategoryTitle'>Primera Película</h3>
                    <WowsCategory {...movies.firstWowOrdered} />
                    <h3 className='subcategoryTitle'>Última Película</h3>
                    <WowsCategory {...movies.lastWowOrdered} />
                </>
            }
            <Footer />
        </div>
    )
}

export default FirstAndLast