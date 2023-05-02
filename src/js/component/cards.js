import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { PeopleCard } from "./peopleCard";

export const ListCards = ({element, page}) => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchStarWars(element, page)
    },[page])
    
    return (
        <>
        <h1 className="title">{element}</h1><div className="row flex-nowrap overflow-auto mb-5">
            {
                store[element]?.map(item => {
                    return <PeopleCard key={item.uid} item={item} element={element}/>
                })|| <p>Loading {element}</p>}
        </div>
        </>
    )
}

