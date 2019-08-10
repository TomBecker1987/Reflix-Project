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


    rentMovie = async (e) => {
        let currentUser = e.target.getAttribute("data-user")
        let rentStatus = e.target.getAttribute("data-status")
        let idNum = e.target.getAttribute("data-id")
        let budgetCheck = await this.props.updateBudget(currentUser, rentStatus)
        if (budgetCheck){
            this.props.rentMovie(idNum)
        }
        else {
            alert("Sorry, insufficient funds.")
        }
    }

    updateSearchInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    render() {
        let currentUser = this.props.match.params.name
        let userBudget = this.props.state.budget[currentUser]
        let rentedMovies = this.props.state.movies.filter( m => m.isRented == true)
        let catalogMovies = this.props.state.movies.filter( m => m.isRented == false)
        let searchInput = this.state.searchInput.toLowerCase()
        return (
            <div id="catalog-container">
                <div id="search-budget">
                    <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.updateSearchInput}/>
                    <span>Budget: ${userBudget}</span>
                </div>
                <div id="rented">
                    <h4>Rented:</h4>
                        <div className="catalog-movies">
                            {rentedMovies.filter( m => searchInput.split('').every( l => m.title.toLowerCase().split('').includes(l) ) ).map( m => (
                                    <div className="movie">
                                        <i className="material-icons" data-status="unrenting" data-id={m.id} data-user={currentUser} onClick={this.rentMovie}>remove_circle</i>
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
                            {catalogMovies.filter( m => searchInput.split('').every( l => m.title.toLowerCase().split('').includes(l) ) ).map( m => (
                                    <div className="movie">
                                        <i className="material-icons" data-status="renting" data-id={m.id} data-user={currentUser} onClick={this.rentMovie}>add_circle</i>
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