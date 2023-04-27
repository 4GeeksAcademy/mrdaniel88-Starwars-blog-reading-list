import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const PeopleCard = ({ item, element }) => {
    const { store, actions } = useContext(Context)

    function checkFavorite(elementId) {
        return store.favorites.some(item=>item.id==`${element}/${elementId}`)
    }

    return (

        <div className="card" style={{ width: '18em', height: 'auto', marginRight: '3em' }}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {item.name}</h5>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                    <button href="#" className="btn btn-outline-warning"
                        onClick={() => actions.addFavorites(`${element}/${item.uid}`, item.name)}>
                        <i className={`bi bi-heart${checkFavorite(item.uid)?"-fill":""}`}></i>
                    </button>
                </div>
            </div>
        </div>

    );
}
