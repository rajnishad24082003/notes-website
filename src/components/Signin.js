import React from "react";
export default function Signin()
{

    return(
        <>
        <form className="extra container myborder ">
          <div className="overallmargin">
          <h1>Sign in</h1>
          <br />
          <div className="flexthing">
          <div className="mb-3 signinname">
    <label for="exampleInputName1" className="form-label">First name</label>
    <input type="name" className="form-control signinnamea" id="exampleInputName1"/>
  </div>
  <div className="mb-3 signinname moving">
    <label for="exampleInputName2" className="form-label">Second name</label>
    <input type="name" className="form-control signinnamea " id="exampleInputName2"/>
  </div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Varification code</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="alignment">
  <button type="submit" className="btn btn-primary" >Submit</button>
  </div>
  </div>
</form>
        </>
    )
}