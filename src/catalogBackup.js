import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import '../styles/Catalog.css';
import Movie from './Movie.js'


class Catalog extends Component {
    constructor(){
        super()
        
        this.state = {
            searchInput:""
        }

    }


    rentMovie = (e) => {
        let idNum = e.target.getAttribute("data-id")
        this.props.rentMovie(idNum)
    }

    updateSearchInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    render() {
       return (
            <div id="catalog-container">
                <div id="search-budget">
                    <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.updateSearchInput}/>
                    <span>Budget: $10.00</span>
                </div>
                <div id="rented">
                    <h4>Rented:</h4>
                        <div className="catalog-movies">
                            {this.props.state.movies.filter( m => m.isRented == true ).map( m => (
                                    <div className="movie">
                                        <i class="material-icons" data-id={m.id} onClick={this.rentMovie}>remove_circle</i>
                                        <img src={m.img}/>
                                        <Link to={`/movies/${m.id}`}>
                                            <div className="invisible"></div>
                                        </Link>
                                    </div>
                            ) )}
                        </div>
                </div>
                <div id="catalog">
                    <h4>Catalog:</h4>
                        <div className="catalog-movies">
                            {this.props.state.movies.filter( m => m.isRented == false ).map( m => (
                                <div className="movie">
                                    <i class="material-icons" data-id={m.id} onClick={this.rentMovie}>add_circle</i>
                                    <img src={m.img}/>
                                    <Link to={`/movies/${m.id}`}>
                                        <div className="invisible"></div>
                                    </Link>
                                </div>
                            ) )}
                        </div>
                </div>

            </div>
       );
    }
}

export default Catalog;