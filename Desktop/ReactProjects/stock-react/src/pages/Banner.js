import React from 'react';
import niclogo from './nic-logo.jpg';
import indialogo from './indialogo.jpeg';

export default function Banner() {
    return (
        <div class="container border font-weight-bolder   shadow-lg">
            <div class="row">
                <div class="col-sm-3">
                    <img src={niclogo} alt="Logo" class="img-fluid" style={{width: "180px", height: "100px",
                    backgroundColor: "#e6ffff",borderRadius: "20px"
                     }} />
                </div>
                <div class="col-sm-6">
                    <h2 style={{ marginTop: "10px", fontSize: "45px" }}>
                        STOCK DETAILS OF NIC
                    </h2>
                </div>
                <div class="col-sm-3" style={{alignContent: "right"}}>
                    <img src={indialogo} alt="Logo" class="img-fluid" style={{width: "180px", height: "100px" }} />
                </div>
            </div>
        </div>
    )
}
