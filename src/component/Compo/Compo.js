import React from 'react';
import car from '../../image/car.png';
import customer from '../../image/customer.png';
import phone from '../../image/phone.png';
import safe from '../../image/safe.png';
import './Compo.css';

const Compo = () => {
    return (
        <div className="d-md-flex justify-content-between bg-info p-5">
           <div  className="d-flex">
               <div>
                   <img className="compo-icon" src={car} alt="" />
               </div>
               <div>
                   <p className="my-2"><span className="fw-bold fs-4">30-DAYS RETURN</span> <br /> Money back gaurantee</p>
               </div>
           </div>
           <div className="d-flex">
           <div>
                <img className="compo-icon" src={phone} alt="" />
           </div>
               <div>
                   <p className="my-2"><span className="fw-bold fs-4">LOWEST SHIPPING</span> <br /> On orders above $1000</p>
               </div>
           </div>
           <div className="d-flex">
           <div>
                <img className="compo-icon" src={customer} alt="" />
           </div>
               <div>
                   <p className="my-2"><span className="fw-bold fs-4">CUSTIMER CARE</span> <br /> Help and feedback</p>
               </div>
           </div>
           <div className="d-flex">
           <div>
               <img className="compo-icon" src={safe} alt="" />
           </div>
               <div>
                   <p className="my-2"><span className="fw-bold fs-4">SAFE SHIPPING</span> <br /> Safe shopping gaurantee</p>
               </div></div> 
        </div>
    );
};

export default Compo;