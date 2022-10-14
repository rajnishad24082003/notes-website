import React from "react";
export default function Secondcontend()
{
    return(
        <>
<div className="container sc ">

  <div className="row">
    <div className="col-lg-4 my-4 ">
<div className="card">
  <img src={require("./NCERT-Books-for-Class-6_Maths.jpg")} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Maths</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, temporibus voluptatibus aliquid ipsam neque at esse enim unde optio minima!</p>
  </div>
</div>
    </div>
    <div className="col-lg-4 my-4 ">
    <div className="card">
  <img src={require("./physics.png")} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Physics</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's.</p>
  </div>
</div>
    </div>
    <div className="col-lg-4 my-4 ">
    <div className="card">
  <img src={require("./wmp.jpg")} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">WMP</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet example text. </p>
  </div>
</div>
    </div>
  </div>
  <div className="row">
  <div className="col-lg-2"></div>
    <div className="col-lg-4 my-4 ">
    <div className="card">
  <img src={require("./egd.jfif")} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">EGD</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col-lg-4 my-4 ">
    <div className="card">
  <img src={require("./bee.jfif")} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">BEE</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  </div>

  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Maths
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul className="list-group-item">
      <li className="list-group-item"><a href="https://rajnishad24082003.github.io/maths-module1/" target="blank" >Module 1:Calculus-1 calculus</a>
            </li>
  <li className="list-group-item"><a href="https://rajnishad24082003.github.io/maths-module2/" target="blank" >Module 2:multivariable calculus</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/maths-module3/" target="blank" >Module 3:complex number and sequence,series</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/maths-module4/" target="blank" >Module 4:matrices-1</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/maths-module5/" target="blank" >Module 5:calculus-2</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/maths-module6/" target="blank" >Module 6:complex variable</a>
            </li>
</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Physics
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul className="list-group-item">
      <li className="list-group-item"><a href="https://rajnishad24082003.github.io/physics-module1/" target="blank" >Module 1:crystallography</a>
            </li>
  <li className="list-group-item"><a href="https://rajnishad24082003.github.io/physics-module2/" target="blank" >Module 2:semiconductors and photodetectors</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/physics-module3/" target="blank" >Module 3:quantum mechanics</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/physics-module4/" target="blank" >Module 4:wave optics and lasers</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/physics-module5/" target="blank" >Module 5:optoelectronic materials and superconductivity</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/physics-module6/" target="blank" >Module 6:faraday's law and maxwell's...</a>
            </li>
</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        WMP
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul className="list-group-item">
      <li className="list-group-item"><a href="https://rajnishad24082003.github.io/wmp-module1/" target="blank" >Module 1:manufacturing methods</a>
            </li>
  <li className="list-group-item"><a href="https://rajnishad24082003.github.io/wmp-module2/" target="blank" >Module 2:carpentry,fitting operation and power tools</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/wmp-module3/" target="blank" >Module 3:plastic molding,glass cutting</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/wmp-module4/" target="blank" >Module 4:CNC machining,additive manufacturing</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/wmp-module5/" target="blank" >Module 5:welding,brazing</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/wmp-module6/" target="blank" >Module 6:electrical and electronics</a>
            </li>
</ul>
      </div>
    </div>
  </div>
</div>
<div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        EGD
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul className="list-group-item">
      <li className="list-group-item"><a href="https://rajnishad24082003.github.io/egd-module1/" target="blank" >Module 1:introduction to egd</a>
            </li>
  <li className="list-group-item"><a href="https://rajnishad24082003.github.io/egd-module2/" target="blank" >Module 2:projection of point,lines and planes</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/egd-module3/" target="blank" >Module 3:orthographic projections</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/egd-module4/" target="blank" >Module 4:projections of regular solids</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/egd-module5/" target="blank" >Module 5:sections and sectional views...</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/egd-module6/" target="blank" >Module 6:isometric projections</a>
            </li>
</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        BEE
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul className="list-group-item">
      <li className="list-group-item"><a href="https://rajnishad24082003.github.io/bee-module1/" target="blank" >Module 1:D.C circuits</a>
            </li>
  <li className="list-group-item"><a href="https://rajnishad24082003.github.io/bee-module2/" target="blank" >Module 2:A.C circuits</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/bee-module3/" target="blank" >Module 3:electrical installations</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/bee-module4/" target="blank" >Module 4:transformers</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/bee-module5/" target="blank" >Module 5:electrical machines</a>
            </li>
            <li className="list-group-item"><a href="https://rajnishad24082003.github.io/bee-module6/" target="blank" >Module 6:power converters</a>
            </li>
</ul>
      </div>
    </div>
  </div>




</div>
        </>
    )
}