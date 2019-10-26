/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Third's components
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';

// Custom components
import ListView from 'Components/SearchMovie/ListView'

class App extends Component {

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Búsqueda de actas</title>
					<meta name="description" content="Búsqueda de actas" />
				</Helmet>
				<div className="page-title d-flex justify-content-between align-items-center">
					<div className="page-title-wrap p-10">
						<h2 className="">Búsqueda de actas</h2>
					</div>
				</div>
				<RctCard>
					<ListView />
				</RctCard>
			</React.Fragment>
		)
	}
}

// map state to props
const mapStateToProps = ({ }) => {
	return {};
};

export default connect(mapStateToProps)(App);
