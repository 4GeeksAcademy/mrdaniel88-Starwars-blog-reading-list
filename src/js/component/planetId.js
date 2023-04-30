import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetId = () => {

    const { store, actions } = useContext(Context)
    const { planetId } = useParams()
    const planet = store.planet && store.planet[planetId]

    useEffect(() => {
        actions.fetchElement("planets",planetId)
    }, [])

    return (
        <div className="text-center mt-5">
            <h1>Planet Detail</h1>
            <h2>Id: {planetId} </h2>
            {/* <img src={planet.img} alt="Italian Trulli"/> */}
            {planet && Object.entries(planet).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} alt="Italian Trulli"/> : <h5>{key}: {value}</h5>}
                </div>
            ))}
        </div>
    )
}