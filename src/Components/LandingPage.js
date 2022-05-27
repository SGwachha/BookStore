import React from "react";
import Arrival from "./Arrival";
import BestSeller from "./BestSeller";
import NepaliBooks from "./NepaliBooks";
import BusinessAndFinance from "./BusinessAndFinance";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigateRoute = useNavigate()
    const navigatePath=()=>{
        navigateRoute('/a')
    }
    return (
        <div className="mainContainer">
            <div className="container">
                <div className="p">
                    <div className="above">Up To 25% Discount on this New Year</div>
                    <div className="above">From April 10 to 20</div>
                    <button className="btn-1" onClick={navigatePath}>Shop Now</button>
                </div>
            </div>
            <div className="Blog">
                <Arrival />
                <BestSeller />
                <NepaliBooks />
                <BusinessAndFinance />
            </div>
        </div>
    )
}

export default LandingPage