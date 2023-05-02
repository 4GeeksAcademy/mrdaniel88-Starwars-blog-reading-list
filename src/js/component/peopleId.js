import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleId = () => {

    const { store, actions } = useContext(Context)
    const { peopleId } = useParams()
    const person = store.element && store.element[peopleId]

    useEffect(() => {
        actions.fetchElement("people",peopleId)
    }, [])

    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (
        <div className="text-center mt-5">
            <h1>People Detail</h1>
            <h2>Id: {peopleId} </h2>
            {/* <img src={planet.img} alt="Italian Trulli"/> */}
            {person && Object.entries(person).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="person"/> : <h5>{key}: {value}</h5>}
                </div>
            ))}
        </div>
    )
}