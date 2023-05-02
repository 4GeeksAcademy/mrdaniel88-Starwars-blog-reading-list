import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PeopleCard = ({ item, element }) => {
    const { store, actions } = useContext(Context)

    function checkFavorite(elementId) {
        return store.favorites.some(item=>item.id==`${element}/${elementId}`)
    }

    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (

        <div className="card" style={{ width: '18em', height: 'auto', marginRight: '3em' }}>
            <img src={item.img} onError={imgError} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {item.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/${element}/${item.uid}`} className="btn btn-outline-primary">See details</Link>
                    <button href="#" className="btn btn-outline-warning"
                        onClick={() => actions.addFavorites(`${element}/${item.uid}`, item.name)}>
                        <i className={`bi bi-heart${checkFavorite(item.uid)?"-fill":""}`}></i>
                    </button>
                </div>
            </div>
        </div>

    );
}
