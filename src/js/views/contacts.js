import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/contacts.css";
import { CreateContact } from "./createContact";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const handleCreateContact = () => {
		actions.addContact({
			
			
				fullName: "Cristiano Ronaldo",
				email: "ilovegio@gmail.com",
				agendaSlug: "cr7thebest",
				address: "Arabia",
				phone: "9165654322"
			
			
		})
	}

	const handleDeleteContact = (id) => actions.deleteContact(id);

	
	useEffect(() => actions.getAgenda(), []);

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.lenghth === 0 ? (<span>No contacts</span>) :
				store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<p>{item.full_name}</p>
							<button className="btn btn-danger" onClick={() => handleDeleteContact(item.id)} > Delete </button>
						
							
							
							
						</li>
					);
				})}
			</ul>
			<br />
			<button className="btn btn-primary" onClick={handleCreateContact} >Create first Contact</button>
			
		</div>
	);
};
