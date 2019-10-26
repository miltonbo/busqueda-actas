import React, { Component } from 'react'

// Third's components
import CircularProgress from '@material-ui/core/CircularProgress';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';

// Custom components
import Filter from './Filter'
import MoviesList from './MoviesList'

// Redux
import { connect } from 'react-redux';

class ListView extends Component {

    // Life cycle methods
    componentDidCatch(error, info) {
        NotificationManager.error('Something went wrong.', 'Error')
    }

    render() {
        const { loading } = this.props

        return (
            <div className="p-20">

                <NotificationContainer />

                {/* Filter component to search values */}
                <Filter />

                <hr />

                {/* Loading */}
                {loading &&
                    <div className="loader-on-top">
                        <CircularProgress />
                    </div>
                }

                <MoviesList />
            </div>
        )
    }


}

const mapStateToProps = ({ moviesApp }) => {
    const { loading } = moviesApp;
    return { loading };
}

export default connect(mapStateToProps, {
})(ListView);