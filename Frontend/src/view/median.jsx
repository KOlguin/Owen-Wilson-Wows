import { React, useState, useEffect } from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import BreadcrumbCategory from '../Components/breadcrumbsForCategory'
import WowsCategory from '../Components/wowsCategory'

// import '../assets/styles/firstandLast.css'

const Median = () => {

    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoadnig] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/median-wow`)
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
                console.error("Error al obtener la información de las peliculas", error)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <Navbar />
            <BreadcrumbCategory categoryName={"Película en la Mediana"} />
            <h1 className='categoryTitle'>Película en la Mediana</h1>
            <p className='categoryDescription'>Aquí encontraremos la película que se encuentra en la mediana dentro de las que se tiene registro, donde el actor Owen Wilson dice wow junto con datos relevantes de este. Al día 01/08/2024 se encontraron 91 wows registrados por lo que se ha tomado el dato 45 para mostrar la siguiente información</p>
            {
                isLoading ? 
                <p className='categoryLoading'>Cargando...</p> : 
                <WowsCategory {...movie.medianData} />
            }
            <Footer />
        </div>
    )
}

export default Median