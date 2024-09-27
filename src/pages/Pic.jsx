import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Btmimg1 from "../Assets/IMG_20240828_103114.jpg";

function Pic()
{
    return(
        <div>
            <Navbar></Navbar>
            <div>
                <img src={Btmimg1}/>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Pic;