import React from 'react'
import Navbar from '../Components/navbar'

import CardCategoryGroup from '../Components/cardCategoryGroup'

import '../assets/styles/home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div id='homeRectangle'>
                <h2 id='homeTitle'>Los Wows del Actor Owen Wilson</h2>
                <p id='homeIntro'>Información relevante asociada a los wows que ha dicho el actor Owen Wilson recopilados por la 
                    API <a href='https://owen-wilson-wow-api.onrender.com/' id='homeOriginalAPI'>owen-wilson-wow</a>.</p>
            </div>
            <div id="homeCategories">
                <CardCategoryGroup />
            </div>
        </div>
        
    )
}

export default Home