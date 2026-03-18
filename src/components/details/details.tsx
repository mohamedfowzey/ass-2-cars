import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vector from "../../assets/Vector.png";
import audi from "../../assets/Audi 1.png";
import type Car from "../car";

export default function Details() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState<Car|undefined>(undefined);
  const getCarById = async (carId: number = 1) => {
    const response = await axios.get(`https://myfakeapi.com/api/cars/${carId}`);
    return response.data.Car;
  };
  /* laoder code*/
  const laoder = (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  useEffect(() => {
    getCarById(id?+id:1).then((car) => {
      console.log(car);

      setCarDetails(car);
    });
  });
  return (
    <>
    {carDetails?.id == undefined ? laoder : (
      <section className="d-flex flex-column justify-content-center vh-100">
        <div className="row m-0">
          <div className="col-lg-6 p-0 position-relative ">
            <img
              src={vector}
              height="500px"
              className="position-absolute z-n1"
              style={{ bottom: "-56px" }}
            />
            <img src={audi} className="img-fluid"/>
          </div>
          <div className="col-lg-6 p-0 ps-5">
            {}
            <div className="popular mx-0">WHY CHOOSE US</div>
            <h1 className="poppins-medium fs-1">
              We offer the best experience with our rental deals
            </h1>
            <p className="poppins-light fs-6 text-black-50">
              Name: {carDetails?.car}
            </p>
            <p className="poppins-light fs-6 text-black-50">
              Model: {carDetails?.car_model}
            </p>
            <p
              className="poppins-light fs-6 "
              style={{ color: `${carDetails?.car_color}` }}
            >
              Color: {carDetails?.car_color}
            </p>
            <p className="poppins-light fs-6 text-black-50">
              Model Year: {carDetails?.car_model_year}
            </p>
            <p
              className="poppins-light fs-6 "
              style={{ color: `${carDetails?.availability ? "green" : "red"}` }}
            >
              {carDetails?.availability
                ? "available for rent"
                : "not available"}
            </p>
          </div>
        </div>
      </section>
    )}
    </>
  );
}
