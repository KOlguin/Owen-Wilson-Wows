import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './view/home'
import AllMovies from './view/allMovies'
import AllDirectors from './view/allDirectors'
import FirstAndLast from './view/firstandLast'
import LongestMovie from './view/longestMovie'
import Median from './view/median'

export default function RoutesFunction() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/all-movies" element={<AllMovies />} />
            <Route exact path="/all-directors" element={<AllDirectors />} />
            <Route exact path="/first-last-wow" element={<FirstAndLast />} />
            <Route exact path="/longest-movie" element={<LongestMovie />} />
            <Route exact path="/median-wow" element={<Median />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
    
}