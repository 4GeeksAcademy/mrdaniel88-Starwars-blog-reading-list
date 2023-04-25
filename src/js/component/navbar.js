import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#"><i class="fa-solid fa-jedi"></i></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="container-fluid collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
						
						<ul class="navbar-nav mb-2 mb-lg-0">
							<li class="nav-item dropdown">
								<a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
									aria-expanded="false">
									<button type="button" class="btn btn-primary d-flex gap-1">Favorites<i
										class="fa-solid fa-caret-down"></i></button>
								</a>
								<ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
									<li><a class="dropdown-item" href="#">Profile</a></li>
									<li><a class="dropdown-item" href="#">Accesibility</a></li>
									<li><a class="dropdown-item" href="#">Privacy and Data</a></li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li><a class="dropdown-item text-danger" href="#">Log out</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	);
};
