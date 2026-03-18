import { Link } from "react-router-dom";
import "./rentalCard.css";
import type Car from "../car";
const RentalCard = ({car,imgSrc,}:{car:Car,imgSrc:string})=>{
    return (
        <>
            <div className="card-container box-shadow p-2 poppins-extralight fs-7">
                <img src={imgSrc} className="w-100 img-fluid py-4 px-2 mb-3"/>
                <h3 className="fs-4 poppins-medium">{car?.car} {car?.car_model}</h3>
                {/* <h6 className="fs-4 poppins-semibold"></h6> */}
                <p className=""><i className="fa-solid fa-star text-star"></i><span className="poppins-semibold">4.8</span> (2000 reviwer)</p>
                <div className="row border-bottom">
                    <div className="col-6">
                        <p><i className="fa-regular fa-user"></i> 4 pasengers</p>
                        <p><i className="fa-regular fa-snowflake"></i> air conditin</p>
                    </div>
                    <div className="col-6">
                        <p><i className="fa-solid fa-trailer"></i> Auto</p>
                        <p><i className="fa-solid fa-door-closed"></i> 4 doors</p>
                    </div>
                </div>
                <p className="mt-2"> price <span className="price float-end"><span className="poppins-semibold">{car?.price}</span>/day</span></p>
               <Link to = {`/details/${car?.id}`}> <button className="btn btn-primary w-100"><span className="poppins-light">rent now <i className="fa-solid fa-arrow-right align-middle ps-2" ></i></span></button></Link>
            </div>

        </>
    )
}
export default RentalCard;