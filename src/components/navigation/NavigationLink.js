import React from "react";
import { Route, Link } from "react-router-dom";

class NavigationLink extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Route
				path={this.props.to}
				exact={this.props.exact}
				children={({ match }) => (
					<li className={"nav-item" + (match ? " active" : "")}>
						<Link className="nav-link" to={this.props.to}>{this.props.children}</Link>
					</li>
				)}
			/>
		);
	}
}

export default NavigationLink;