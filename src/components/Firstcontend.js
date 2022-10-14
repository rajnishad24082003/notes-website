import React from "react";
import './Job13.jpg'
export default function Firstcontend()
{
    return(
        <>
        <div className="container-fluid extra">
        <div className="container">
  <div className="row">
    <div className="col-lg-6 col-sm-12 ">
    <img src={require("./Job13.jpg")} className="mainphoto img-fluid" alt="" />
    </div>
    <div className="col-lg-6 col-sm-12 ">
    <h1 className="maintext">Welcome to www.webcreater.tech</h1>
    <h2 className="secondarytext py-2">This website aims to provide all the solutions of resource book of TCET</h2 >
    </div>
  </div>
</div>
</div>
        <style>{'body { background-color: rgb(240, 255, 255); }'}</style>
        </>
    )
}
