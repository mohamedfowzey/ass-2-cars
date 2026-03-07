import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Router, useLocation } from 'react-router-dom';
import RentalCard from '../rentalCard/rentalCard';
export default function Cars() {
  const location = useLocation();
  const [carsList,setCarsList] = useState([]);
  // const [index,setIndex] = useState(1);
  const carsImages = Object.values(import.meta.glob("../../assets/cars/*.png", {
    eager: true,
  })).map(i=>i.default);
  const getCars =async (i:number = 1)=>{
    console.log("hi");
    
    const  data = (await axios.get("https://myfakeapi.com/api/cars")).data.cars;
    setCarsList(data);
    }
    useEffect(()=>{
      getCars();
    },[])
  return (
    <>
      <header className='container p-5 w-auto'>Home{location.pathname}</header>
      <div className="container">
        <div className="row">
          {(carsList.length < 1)?(<div className="text-center">
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>):''}
          {carsList.map(
        (c,i)=>
          <div className="col-lg-3 col-md-6">
        <RentalCard key = {c?.id} car = {c} imgSrc = {(i>=carsImages.length)?carsImages[i%4] : carsImages[i]}></RentalCard>
 </div>
      )}
        </div>
      </div>
    </>
  )
}
