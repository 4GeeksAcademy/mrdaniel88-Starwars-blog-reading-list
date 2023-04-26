import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.fetchStarWars("planets")
		actions.fetchStarWars("people")
		actions.fetchStarWars("vehicles")
	}, [])


	return (
		<div className="text-center mt-5">
			{/* {store.people && <Card/>} */}
			<div className="overflow-scroll d-flex flex-row">
				{store.people &&
					store.people.results.map(person => (
						<Card key={person.name} person={person}/>
					))}
			</div>




		</div>
	);
}

