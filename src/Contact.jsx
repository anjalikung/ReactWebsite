import React, { useState } from "react";

const Contact =()=>{

    const [data , Setdata] = useState({
        fname : "",
        phone : "",
        email : "",
        msg : ""
    });

    const inputEvent =(event)=>{
        const {name , value} = event.target;
        Setdata((preVal)=>{
            return{
                ...preVal,
                [name] : value
            }
           
        })
    };

    const formsubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fname}  My phone number is ${data.phone} My Email Address is ${data.email}  My Message is ${data.msg}`);
       
    }
    
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <section className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-12 mx-auto">
                <form onSubmit={formsubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                     Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="fname"
                      value={data.fname}
                      onChange={inputEvent}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                   
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Phone
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      name="phone"
                      value={data.phone}
                      onChange={inputEvent}
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      value={data.email}
                      onChange={inputEvent}
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Message
                    </label>
           
                    <textarea  class="form-control"  
                    name="msg"
                     value={data.msg}
                     onChange={inputEvent}
                    id="floatingTextarea2"></textarea>
                  </div>
                 
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


export default Contact;


