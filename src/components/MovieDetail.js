import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import '../styles/MovieDetail.css';


class MovieDetail extends Component {

    render() {
        let idNum = this.props.match.params.id
        let movies = this.props.state.movies
        let movie = movies.find( m => m.id == idNum )
        return (
            <div id="movie-detail">
                <h2>
                    <span>{movie.title}</span>
                    <span>({movie.year})</span>
                </h2>
                <figure>
                    <img src={movie.img} alt={movie.title}/>
                </figure>
                <p id="description">{movie.descrShort}</p>
            </div>
        );
    }
}

export default MovieDetail;