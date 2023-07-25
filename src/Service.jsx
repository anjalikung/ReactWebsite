import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Service = () => {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto banner-style">
              <div className="my-5">
                <h1 className="text-center mt-3">Our Services</h1>
              </div>
              <div className="row gy-3">
                {Sdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgscr={val.imgscr} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
