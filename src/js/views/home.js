import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peopleCard";

import { ListCards } from "../component/cards";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.fetchStarWars("planets")
		actions.fetchStarWars("people")
		actions.fetchStarWars("vehicles")
	}, [])

	return (
		<div className="text-center mt-5">
			<ListCards element="people"></ListCards>
			<ListCards element="planets"></ListCards>
			<ListCards element="vehicles"></ListCards>
		</div>
	);
}

