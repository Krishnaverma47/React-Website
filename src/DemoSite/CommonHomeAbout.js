import React from 'react'
import { NavLink } from 'react-router-dom';
function CommonHomeAbout(props) {
    return (
        <>
           <div className="container-fluid banner">
                <div className="row myRow">
                    <div className="col-lg-6 col-md-12 myColumn innerDiv">
                        <h4 className="heading">{props.head}</h4>
                        <span className="myName"> Krishna Verma</span>
                        <h5 className="para">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.</h5>
                        <NavLink to="/"  className="myBtn">{props.visit}</NavLink>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={props.image} alt='Root' className="img-fluid ps-4"></img>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default CommonHomeAbout
