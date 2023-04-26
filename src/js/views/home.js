import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peopleCard";
import { VehicleCard } from "../component/vehicleCard";
import { PlanetCard } from "../component/planetCard";

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
			<div className="row flex-nowrap overflow-auto mb-5">
				{store.people &&
					store.people.results.map(person => (
						<PeopleCard key={person.name} person={person}/>
					))}
			</div>

			<div className="row flex-nowrap overflow-auto mb-5">
				{store.vehicles &&
					store.vehicles.results.map(vehicle => (
						<VehicleCard key={vehicle.name} vehicle={vehicle}/>
					))}
			</div>

			<div className="row flex-nowrap overflow-auto mb-5">
				{store.planets &&
					store.planets.results.map(planet => (
						<PlanetCard key={planet.name} planet={planet}/>
					))}
			</div>




		</div>
	);
}

