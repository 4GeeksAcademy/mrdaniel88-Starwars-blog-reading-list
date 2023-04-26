import React from "react";


export const Card = ({person}) => {
    return (
       
        <div className="card" style={{ width: '18em', height: 'auto', marginRight: '3em'}}>
            <img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Gender: {/* {person.properties.gender} */}</p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                    <a href="#" className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
 
    );
}
