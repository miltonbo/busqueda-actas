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

    render() {
        const { movies } = this.props;
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
                        <h4>Ningún acta buscada</h4>
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