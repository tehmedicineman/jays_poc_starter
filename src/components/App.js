import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//-- libraries and such
const $ = require('jquery');
require('bootstrap');

//-- components
import NavigationLink from './navigation/NavigationLink';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

//-- libraries

//-- stylesss
import 'bootstrap/dist/css/bootstrap.min.css';
import '~/css/template.css';


class App extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
						<span className="navbar-brand">Stuff</span>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarsExampleDefault">
							<ul className="navbar-nav mr-auto">
								<NavigationLink to={"/"} exact={true}>
									Home
								</NavigationLink>
								<NavigationLink to={"/derp"} exact={true}>
									Derp
								</NavigationLink>
								<NavigationLink to={"/dorp"} exact={true}>
									Dorp
								</NavigationLink>
								{/* <li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
									<div className="dropdown-menu" aria-labelledby="dropdown01">
										<a className="dropdown-item" href="#">Action</a>
										<a className="dropdown-item" href="#">Another action</a>
										<a className="dropdown-item" href="#">Something else here</a>
									</div>
								</li> */}
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
					</nav>

					<main role="main" className="container">
						<Route path="/" exact={true} component={PageOne} />
						<Route path="/derp" exact={true} component={PageTwo} />
					</main>
				</div>
			</Router>
		);
	}
}

// App.propTypes = {};

export default App;