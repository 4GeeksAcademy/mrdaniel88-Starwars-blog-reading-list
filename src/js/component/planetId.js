import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const PlanetId = () => {

    const { store, actions } = useContext(Context)
    const { planetId } = useParams()
    const planet = store.element && store.element[planetId]

    useEffect(() => {
        actions.fetchElement("planets",planetId)
    }, [])

    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (
        <div className="text-center mt-5">
            <h1>Planet Detail</h1>
            <h2>Id: {planetId} </h2>
            {/* <img src={planet.img} alt="Italian Trulli"/> */}
            {planet && Object.entries(planet).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>
            ))}
        </div>
    )
}