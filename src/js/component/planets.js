import React, { useState, useEffect, useContext } from "react";
import { ListCards } from "./cards";
import { Link, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planets = () => {
 
    const { store, actions } = useContext(Context)
    const [searchParams, setSearchParams] = useSearchParams()
    const [pages, setPages] = useState()
    // const numberOfPages = store.pages.planets


    useEffect(() => {
        actions.fetchPages("planets").then((totalPages) => {
            setPages(totalPages);
        });
    }, []);
   

    const updateList =(pageNumber) => {
        setSearchParams({page:pageNumber})
    }
    

    return (
        <div className="text-center mt-5">
            <ListCards element="planets" page={searchParams.get("page")} />
            <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-center">
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    {
                        new Array(pages).fill("").map((item, index) => 
                        <li key={index+1} className={`page-item ${searchParams.get("page") == index+1 ? "active" : ""}`}>
                            <Link className="page-link" to={`/planets?page=${index+1}`} onClick={()=>updateList(index+1)}>{index+1}</Link>
                        </li>
                        )
                    }
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <h3>Pagina {searchParams.get("page")}</h3>
        </div>
    )
}