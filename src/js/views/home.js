import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => {
		actions.fetchStarWars("planets")
		actions.fetchStarWars("people")
		actions.fetchStarWars("vehicles")
	}, [])

	return (
		<div className="text-center mt-5">
			
		</div>
	);
}

