import CardGroup from 'react-bootstrap/CardGroup';

import CardCategory from './cardCategory';

import directorsImg from '../assets/Image/director.png'
import moviesImg from '../assets/Image/movie.png'
import longestImg from '../assets/Image/longest.png'
import firstImg from '../assets/Image/primero.png'
import medianImg from '../assets/Image/mediana.png'

const categoriesInfo = {
    "directors": {
        "imagePath": directorsImg,
        "title": 'Todos los Directores',
        "description": "Todos los directores en cuyas películas el actor Owen Wilson dice wow",
        "refRoute": "all-directors"
    },

    "movies": {
        "imagePath": moviesImg,
        "title": 'Todas las Películas',
        "description": "Todas las películasen las que el actor Owen Wilson dice wow",
        "refRoute": "all-movies"
    },

    "longest": {
        "imagePath": longestImg,
        "title": 'La Película más Larga',
        "description": "La película de mayor duración, donde Owen Wilson dice wow",
        "refRoute": "longest-movie"
    },

    "firstLast": {
        "imagePath": firstImg,
        "title": 'Primera y Ultima Película',
        "description": "La primera y última película de la que se tiene registro que Owen Wilson dice wow",
        "refRoute": "first-last-wow"
    },

    "median": {
        "imagePath": medianImg,
        "title": 'Película en la Mediana',
        "description": "Película que se encuentra en el medio de la lista registrada de wows que ha dicho Owen Wilson",
        "refRoute": "median-wow"
    }
}

function CardCategoryGroup() {
  return (
    <>
        <style type="text/css">
        {`
            .card-group {
                margin: 15px;
                padding-left:5%;
                padding-right: 5%
            }
        `}
        </style>

        <CardGroup>
            <CardCategory image={categoriesInfo.movies.imagePath} 
                                title={categoriesInfo.movies.title} 
                                description={categoriesInfo.movies.description} 
                                route={categoriesInfo.movies.refRoute} />
            <CardCategory image={categoriesInfo.directors.imagePath} 
                                title={categoriesInfo.directors.title} 
                                description={categoriesInfo.directors.description} 
                                route={categoriesInfo.directors.refRoute} />
            <CardCategory image={categoriesInfo.longest.imagePath} 
                                title={categoriesInfo.longest.title} 
                                description={categoriesInfo.longest.description} 
                                route={categoriesInfo.longest.refRoute} />
            <CardCategory image={categoriesInfo.firstLast.imagePath} 
                                title={categoriesInfo.firstLast.title} 
                                description={categoriesInfo.firstLast.description} 
                                route={categoriesInfo.firstLast.refRoute} />
            <CardCategory image={categoriesInfo.median.imagePath} 
                                title={categoriesInfo.median.title} 
                                description={categoriesInfo.median.description} 
                            route={categoriesInfo.median.refRoute} />
        </CardGroup>
    </>
    
  );
}

export default CardCategoryGroup;