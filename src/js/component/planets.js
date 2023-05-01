import React, { useState, useEffect, useContext } from "react";
import { ListCards } from "./cards";
import { Link, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [pages, setPages] = useState(10)


    return (
        <div className="text-center mt-5">
            <ListCards element="planets" page={searchParams.get("page")} />
            <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        new Array(pages).fill("").map((item, index) => 
                        <li key={index+1} className={`page-item ${searchParams.get("page") == index+1 ? "active" : ""}`}>
                            <Link className="page-link" to={`/planets?page=${index+1}`}>{index+1}</Link>
                        </li>
                        )
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <h3>Pagina {searchParams.get("page")}</h3>
        </div>
    )
}