import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const information = store.favorites

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><i className="star-wars fa-solid fa-jedi"></i></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="container-fluid collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">

					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							{/* <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
									aria-expanded="false">
									<button type="button" className="btn btn-primary d-flex gap-1">Favorites<i
										className="fa-solid fa-caret-down" ></i></button>
								</a> */}
							<a className="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</a>
							<ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
								{ information?.map(info => <li><p>{info.name}</p><i class="fa-solid fa-trash-can"></i></li>) || <li>No hay favoritos</li>}
								{/* <li><a className="dropdown-item" href="#">Accesibility</a></li>
								<li><a className="dropdown-item" href="#">Privacy and Data</a></li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li><a className="dropdown-item text-danger" href="#">Log out</a></li> */}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


