import React, { Component } from 'react'
import {
    SearchBox,
    InstantSearch,
} from 'react-instantsearch/dom'

// Redux
import {
    searchMovies,
 } from 'Actions';
import { connect } from 'react-redux';

class Filter extends Component {

    state = {
    }

    searchMovies(filter) {
        clearTimeout(this.state.typingTimeout)
        const _props = this.props
        const typingTimeout = setTimeout(function () {
            if (filter && filter.length >= 3) {
                _props.searchMovies(filter)
            }
        }, 300)
        this.setState({ typingTimeout })
    }

    render() {
        return (
            <InstantSearch
                appId="latency"
                apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                indexName="bestbuy"
            >
                <div className="row">
                    <h4 className="col-sm-2 col-md-1 pt-5">Search</h4>
                    <SearchBox className="col-sm-10 col-md-11 search-field" id="search" name="search"
                        showLoadingIndicator translations={{ placeholder: 'Type here...' }}
                        autoFocus onSubmit={event => { event.preventDefault(); this.searchMovies() }}
                        onChange={event => this.searchMovies(event.currentTarget.value)} />
                    <div className="m-5 col-12">
                        <span className="text-muted fs-14">*Show max 20 results.</span>
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
 })(Filter);