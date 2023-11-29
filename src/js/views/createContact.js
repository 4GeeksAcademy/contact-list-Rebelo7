import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateContact = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<form className="contactform">: 
				<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="mb-3 form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>

				{store.contacts[params.theid].form}
			</form>
			


			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
				Contacts List
				</span>
			</Link>
		</div>
	);
};

CreateContact.propTypes = {
	match: PropTypes.object
};
