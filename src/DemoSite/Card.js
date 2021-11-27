import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xsm-12">
                <div className="card">
                    <img src={props.imageSource} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <NavLink to="/" className="btn btn-success fs-5 fw-normal">
                            Get Started
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
