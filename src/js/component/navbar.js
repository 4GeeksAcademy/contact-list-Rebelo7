import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-end">
			<div className="ml-auto justify-content-end">
				<Link to="/contacts">
					<button className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
