import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const PeopleCard = ({ item }) => {
    const { store, actions } = useContext(Context)


    return (

        <div className="card" style={{ width: '18em', height: 'auto', marginRight: '3em' }}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {item.name}</h5>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                    <button href="#" className="btn btn-outline-warning"
                        onClick={() => actions.addFavorites(item.uid, item.element, item.name)}>
                        <i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>

    );
}

PeopleCard.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
}