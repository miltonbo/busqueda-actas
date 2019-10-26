import React, { Component } from 'react'
import {
    SearchBox,
    InstantSearch,
} from 'react-instantsearch/dom'

// Redux
import {
    searchMovies,
    searchMoviesResponse,
 } from 'Actions';
import { connect } from 'react-redux';

class Filter extends Component {

    state = {
    }

    setMovies(filter) {
        this.setState({ filter })
        this.props.searchMoviesResponse({ movies: [], code: 'ok', message: null })
    }

    searchMovies() {
        const { filter } = this.state
        this.props.searchMovies(filter)
    }

    render() {
        return (
            <InstantSearch
                appId="latency"
                apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                indexName="bestbuy"
            >
                <div className="col-12">
                    <h4 className="row">Pasos</h4>
                    <span className="text-muted fs-14">1. Introducir número de mesa inicial y presionar ENTER</span>
                    <span className="text-muted fs-14">2. El sistema mostrará los siguientes 20</span>
                    <span className="text-muted fs-14">(Opcional) Puede hacer click sobre una imagen para ver en pantalla completa y luego presionar ESC para salir</span>
                </div>
                <br />
                <div className="row">
                    <h4 className="col-sm-2 col-md-6 pt-5">Desde número de mesa (Por ejemplo: 2000)</h4>
                    <SearchBox className="col-sm-10 col-md-6 search-field" id="search" name="search"
                        showLoadingIndicator translations={{ placeholder: 'Type here...' }}
                        autoFocus onSubmit={event => { event.preventDefault(); this.searchMovies() }}
                        onChange={event => this.setMovies(event.currentTarget.value)} />
                    <div className="m-5 col-12">
                        <span className="text-muted fs-14">*Se mostraran las siguientes 20 actas (Por ejemplo: Desde 2000 hasta 2020).</span>
                    </div>
                </div>
            </InstantSearch>
        )
    }

}

const mapStateToProps = ({ moviesApp }) => {
    const { loading } = moviesApp;
    return { loading };
 }
 
 export default connect(mapStateToProps, {
    searchMovies,
    searchMoviesResponse,
 })(Filter);