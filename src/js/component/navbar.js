import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-end">
			<div className="ml-auto justify-content-end">
				<Link to="/addcontact">
					<button className="btn btn-primary mx-2">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
