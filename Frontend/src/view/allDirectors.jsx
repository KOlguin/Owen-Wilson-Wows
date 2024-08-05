import React, { useState, useEffect } from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import BreadcrumbCategory from '../Components/breadcrumbsForCategory'
import ListCategory from '../Components/listCategory'

import '../assets/styles/allMovies.css'

const AllDirectors = () => {

    const [directors, setDirectors] = useState([])
    const [isLoading, setIsLoadnig] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/all-directors`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setDirectors(data)
                    setIsLoadnig(false)
                })
                .catch((err) => {
                    console.log(err.message)
                })
            } catch (error) {
                console.error("Error al obtener a los directores", error)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <Navbar />
            <BreadcrumbCategory categoryName={"Todos los Directores"} />
            <h1 className='categoryTitle'>Todos los Directores</h1>
            <p className='categoryDescription'>Aquí encontraremos a todos los directores de películas registradas en las cuales el actor Owen Wilson ha dicho wow.</p>
            {
                isLoading ? 
                <p className='categoryLoading'>Cargando...</p> : 
                <ListCategory info={directors} />
            }
            <Footer />
        </div>
    )
}

export default AllDirectors