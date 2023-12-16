import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	
	const handleDeleteContact = (id) => actions.deleteContact(id);

	useEffect(() => {actions.getAgenda()},  []);

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.length === 0 ? (<span>No contacts</span>) :
				store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<div>
							<img src="https://picsum.photos/200/300" alt="Random" width="200" height="200"></img>
							</div>
							<div className="content">
							<h3>{item.full_name}</h3>	
							<p>{item.email}</p>
							<p>{item.address}</p> 
							<p>{item.phone}</p>
							</div>
							<div>
							<Link to={`/contact/edit/${item.id}`}>
								<button className="btn btn-info"> Edit </button>	
							</Link>
							<button className="btn btn-danger" onClick={() => handleDeleteContact(item.id)} > Delete </button>	
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};