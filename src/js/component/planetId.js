import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetId = () => {
    
    const { store, actions } = useContext(Context)
    const { planetId } = useParams()
    const information = store.planetId

    useEffect(() => {
        actions.fetchElement(planetId)
    },[])

    return(
        <div className="text-center mt-5">
            <h1>Planet Detail</h1>
            <h2>Id: {planetId} </h2>
            {console.log(information)}
            <h2>Name: {planetId.name}</h2>

        </div>
    )
}