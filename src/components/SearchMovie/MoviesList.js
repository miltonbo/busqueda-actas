import React, { Component } from 'react'

// Third's components
import { NotificationManager } from 'react-notifications'

// Custom components
import Movie from './Movie'

// Redux
import { connect } from 'react-redux';

class MoviesList extends Component {

    state = {
    }

    // Life cycle methods
    componentDidCatch(error, info) {
        NotificationManager.error('Something went wrong.', 'Error')
    }

    loadMovies() {
        // https://computo.oep.org.bo/resul/imgActa/21191.jpg
        const movies = [];
        const begin = 2000;
        for (let index = begin; index <  begin + 100; index++) {
            movies.push(index);
        }
        return movies;
    }

    render() {
        const movies = this.loadMovies();
        return (
            <div className="scrollable col-12">
                <div className="row row-eq-height">
                    {movies && movies.map(
                        (movie, key) => (
                            <Movie movie={movie} key={key} 
                                className="col-6 col-md-4"/>
                        )
                    )}
                    {!movies || movies.length == 0 &&
                        <h4>No movies found</h4>
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ moviesApp }) => {
    const { loading, movies } = moviesApp;
    return { loading, movies };
 }
 
 export default connect(mapStateToProps, {
 })(MoviesList);