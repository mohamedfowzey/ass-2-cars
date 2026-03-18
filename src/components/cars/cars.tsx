import axios from 'axios'
import { useLocation } from 'react-router-dom';
import RentalCard from '../rentalCard/rentalCard';
import { useEffect, useState } from 'react';
import type Car from '../car';
import car1 from '../../assets/cars/Audi 1.png'
import car2 from '../../assets/cars/image 11.png'
import car3 from '../../assets/cars/image 12.png'
import car4 from '../../assets/cars/image 13.png'
export default function Cars() {
  const location = useLocation();
  const [carsList,setCarsList] = useState<Car[]|[]>([]);
  // const [index,setIndex] = useState(1);
  const carsImages:string[] = [car1,car2,car3,car4]
  //  Object.values(import.meta.glob("../../assets/cars/*.png", {
  //   eager: true,
  // })) 
  // .map((i)=>{
  //   // console.log(i);
  //   return i.default;
  // });
  const getCars =async ()=>{    
    const  data = (await axios.get("https://myfakeapi.com/api/cars")).data.cars;
    setCarsList(data);
    }
    useEffect(()=>{
     
      (()=>{
        getCars();
})()
    },[])
  return (
    <>
      <header className='container p-5 w-auto'>Home{location.pathname}</header>
      <div className="container">
        <div className="row">
          {(carsList?.length < 1)?(<div className="text-center">
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
