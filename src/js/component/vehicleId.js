import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const VehicleId = () => {

    const { store, actions } = useContext(Context)
    const { vehicleId } = useParams()
    const vehicle = store.element && store.element[vehicleId]

    useEffect(() => {
        actions.fetchElement("vehicles",vehicleId)
    }, [])

    return (
        <div className="text-center mt-5">
            <h1>Vehicle Detail</h1>
            <h2>Id: {vehicleId} </h2>
            {/* <img src={planet.img} alt="Italian Trulli"/> */}
            {vehicle && Object.entries(vehicle).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>
            ))}
        </div>
    )
}