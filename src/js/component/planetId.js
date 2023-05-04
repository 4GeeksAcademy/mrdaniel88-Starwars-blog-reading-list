import { useParams } from "react-router";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const PlanetId = () => {

    const { store, actions } = useContext(Context)
    const { elements,id } = useParams()
    const planet = store.element && store.element[id]
    const itemUrl = elements+"/"+id

    useEffect(() => {
        actions.fetchElement(elements,id)
    }, [])

    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (
        <div className="text-center mt-5">
            <h1>Planet Detail</h1>
            <h2>Id: {id} </h2>
            {/* <img src={planet.img} alt="Italian Trulli"/> */}
            <h2>Name: {planet?.name || "Cargando"}</h2>
            {planet && Object.entries(planet).map(([key, value]) => (
                (key != "created" && key != "edited" && key != "url") ?
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>:""
            ))}
        </div>
    )
}