import React from "react";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column order-lg-1 order-2">
                        <h1>{props.name}</h1>
                        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="mt-3">
                            <NavLink to={props.visit}>{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 pt-5 pt-lg-0 order-lg-2 order-1">
                        <img src={props.imgsrc} alt="main image" width={"600px"} className="img-fluid"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
