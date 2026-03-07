import Header from "../header/header";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";
import car from "../../assets/HeroCar.png";
import mainLogo from "../../assets/heroLogo.png";
import "./home.scss";
import easily from "../../assets/Vector 1.png";
import RentalCard from "../rentalCard/rentalCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import audi from "../../assets/Audi 1.png";
import vector from "../../assets/Vector.png";
import man from "../../assets/test-man.png";
// import girl from "../../assets/test-girl.jpg";
import iphone from "../../assets/iPhone 14 Pro Space Black Mockup.png";

const Home = () => {
  const brandsImages = Object.values(
    import.meta.glob("../../assets/brands/*.png", { eager: true }),
  ).map((i) => i.default);
  const carsImages = import.meta.glob("../../assets/cars/*.png", {
    eager: true,
  });
  const images = Object.values(carsImages).map((i) => i.default);

  const [allCars, setAllCars] = useState([]);
  const [name, setName] = useState("");
  const [first4Cars, setFirst4Cars] = useState([]);
  const getCars = async () => {
    try {
      const response = await axios.get(`https://myfakeapi.com/api/cars`);

      return response.data.cars;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCars().then((res) => {
      setAllCars(res);
      setFirst4Cars(res);
    });
    return () => {};
  }, []);
  return (
    <>
      <Header></Header>
      <section className="hero-section ps-md-5 mb-5">
        <div className=" h-100">
          <div className="row h-100 me-0">
            <div className="left ps-5  order-lg-0 order-1 col-lg-4 my-auto">
              <h1>
                Find, book and rent a car{" "}
                <span className="blue-easily text-primary">
                  Easily <img src={easily} />
                </span>
              </h1>
              <p>
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
              <img src={googlePlay} className="me-2" />
              <img src={appStore} className="me-2" />
            </div>
            <div className="right col-lg-8 order-lg-1 order-0">
              <img src={car} className="one animate" />
              <img src={mainLogo} className="two" />
            </div>
          </div>
        </div>
      </section>
      <section className="container my-5 py-5">
        <div className="input-group p-3 position-relative">
          <input
            id="search"
            type="text"
            className="form-control rounded search-bar ps-5"
            placeholder="Search by name"
            aria-label="Recipient’s username"
            aria-describedby="button-addon2"
            onInput={(e) => {
              setName(e.target?.value ? e.target.value : name);
              // getCars().then((res)=>{setFirst4Cars(res)});
              const filterdCars = allCars.filter((i) =>
                i.car.toLowerCase().includes(name.toLowerCase()),
              );
              setFirst4Cars(filterdCars);
            }}
          />
          <button className="btn btn-primary rounded position-absolute search-btn px-5 py-1">
            search
          </button>

          <label htmlFor="search">
            <i className="fa-solid fa-location-dot"></i>
          </label>
        </div>
        <div className="popular">POPULAR RENTAL DEALS</div>
        <h1 className="text-center mb-5 poppins-medium">
          Most popular cars rental deals
        </h1>
        <div className="container mb-5">
          <div className="row">
            {(() => {
              const result = [];
              for (let index = 0; index < 4; index++) {
                const element = first4Cars[index];
                result.push(
                  <div className="col-lg-3 col-md-6">
                    <RentalCard
                      key={index + 1}
                      car={element}
                      imgSrc={images[index]}
                    ></RentalCard>
                  </div>,
                );
              }
              return result;
            })()}
          </div>
          <Link
            to="/cars"
            className="btn btn-ouline w-auto d-block mx-auto my-5"
          >
            show all vehicles<i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </section>
      <section className="my-5 py-5">
        <div className="popular">how it works</div>
        <h1 className=" poppins-medium text-center mb-5">
          Rent with following 3 working steps
        </h1>
        <div className="row w-md-50 mx-auto mb-5">
          <div className="col-md-4">
            <div className="icon-container popular p-3 fs-3 text-center">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <h3 className="poppins-medium fs-5 text-center">pick-up deate</h3>
            <p className="poppins-extralight fs-7 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur iste quam laboriosam.
            </p>
          </div>
          <div className="col-md-4">
            <div className="icon-container popular p-3 fs-3 text-center">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <h3 className="poppins-medium fs-5 text-center">pick-up deate</h3>
            <p className="poppins-extralight fs-7 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur iste quam laboriosam.
            </p>
          </div>
          <div className="col-md-4">
            <div className="icon-container popular p-3 fs-3 text-center">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <h3 className="poppins-medium fs-5 text-center">pick-up deate</h3>
            <p className="poppins-extralight fs-7 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur iste quam laboriosam.
            </p>
          </div>
        </div>
        <div className="carousel">
          <div className="group">
            {brandsImages.map((path) => (
              <div className="item">
                <img src={path} className="img-fluid" />
              </div>
            ))}
          </div>
          <div className="group">
            {brandsImages.map((path) => (
              <div className="item">
                <img src={path} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-6 d-none d-lg-block position-relative ">
              <div className="audi position-absolute w-100 z-3">
                <img src={audi} className="img-fluid " />
              </div>
              <div className="vector z-n1 position-absolute ">
                <img src={vector} className="img-fluid " />
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <p className="popular ms-0">why choose us</p>
              <h1 className="poppins-medium fs-2">
                We offer the best experience with our rental deals
              </h1>
              <div className="row flex-nowrap py-3 my-3">
                <div className="popular py-3 fs-3 col-2 mb-0 flex-shrink-1 align-self-center">
                  <i className="fa-brands fa-cash-app "></i>
                </div>
                <div className="heading col-10 ps-4 my-auto">
                  <h2 className="poppins-semibold fs-5 ">Lorem ipsum dolor</h2>
                  <p className="poppins-extralight fs-7 lh-sm pe-5 mb-0">
                    Find a lower price? We’ll refund you 100% of the difference
                  </p>
                </div>
              </div>
              <div className="row flex-nowrap py-3 my-3">
                <div className="popular py-3 fs-3 col-2 mb-0 flex-shrink-1 align-self-center">
                  <i className="fa-brands fa-cash-app "></i>
                </div>
                <div className="heading col-10 ps-4 my-auto">
                  <h2 className="poppins-semibold fs-5 ">Lorem ipsum dolor</h2>
                  <p className="poppins-extralight fs-7 lh-sm pe-5 mb-0">
                    Find a lower price? We’ll refund you 100% of the difference
                  </p>
                </div>
              </div>
              <div className="row flex-nowrap py-3 my-3">
                <div className="popular py-3 fs-3 col-2 mb-0 flex-shrink-1 align-self-center">
                  <i className="fa-brands fa-cash-app "></i>
                </div>
                <div className="heading col-10 ps-4 my-auto">
                  <h2 className="poppins-semibold fs-5 ">Lorem ipsum dolor</h2>
                  <p className="poppins-extralight fs-7 lh-sm pe-5 mb-0">
                    Find a lower price? We’ll refund you 100% of the difference
                  </p>
                </div>
              </div>
              <div className="row flex-nowrap py-3 my-3">
                <div className="popular py-3 fs-3 col-2 mb-0 flex-shrink-1 align-self-center">
                  <i className="fa-brands fa-cash-app "></i>
                </div>
                <div className="heading col-10 ps-4 my-auto">
                  <h2 className="poppins-semibold fs-5 ">Lorem ipsum dolor</h2>
                  <p className="poppins-extralight fs-7 lh-sm pe-5 mb-0">
                    Find a lower price? We’ll refund you 100% of the difference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-lightblue">
        <div className="pt-5 position-relative z-2">
          <p className="popular">testamonials</p>
          <h1 className="poppins-medium fs-1 mb-5 pb-5 text-center">
            what people say about us ?
          </h1>
          <div className="carousel">
            <div className="group1 py-5">
              <div className="test card-container box-shadow mx-3 ">
                <div className="row  m-0 align-items-center">
                  <div className="col-6 p-0">
                    <img src={man} className="img-fluid" />
                  </div>
                  <div className="col-6 ps-4">
                    <h2 className="fs-3 poppins-medium mb-0">
                      <span className="fs-1 poppins-bold">5.0</span>stars
                    </h2>
                    <p className="text-star mb-4">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="fs-6 poppins-light mb-5">
                      " Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Quos rerum nobis, molestias blanditiis !"
                    </p>
                    <h3 className="pt-0 fs-3 poppins-medium">
                      charlie johnson
                    </h3>
                    <p className="poppins-extralight fs-7 mb-1">
                      From New Yourk,US
                    </p>
                  </div>
                </div>
              </div>
              <div className="test card-container box-shadow mx-3 ">
                <div className="row  m-0 align-items-center">
                  <div className="col-6 p-0">
                    <img src={man} alt="" className="img-fluid" />
                  </div>
                  <div className="col-6 ps-4">
                    <h2 className="fs-3 poppins-medium mb-0">
                      <span className="fs-1 poppins-bold">5.0</span>stars
                    </h2>
                    <p className="text-star mb-4">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="fs-6 poppins-light mb-5">
                      " Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Quos rerum nobis, molestias blanditiis !"
                    </p>
                    <h3 className="pt-0 fs-3 poppins-medium">
                      charlie johnson
                    </h3>
                    <p className="poppins-extralight fs-7 mb-1">
                      From New Yourk,US
                    </p>
                  </div>
                </div>
              </div>
              <div className="test card-container box-shadow mx-3 ">
                <div className="row  m-0 align-items-center">
                  <div className="col-6 p-0">
                    <img src={man} alt="" className="img-fluid" />
                  </div>
                  <div className="col-6 ps-4">
                    <h2 className="fs-3 poppins-medium mb-0">
                      <span className="fs-1 poppins-bold">5.0</span>stars
                    </h2>
                    <p className="text-star mb-4">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="fs-6 poppins-light mb-5">
                      " Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Quos rerum nobis, molestias blanditiis !"
                    </p>
                    <h3 className="pt-0 fs-3 poppins-medium">
                      charlie johnson
                    </h3>
                    <p className="poppins-extralight fs-7 mb-1">
                      From New Yourk,US
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group1 py-5">
              <div className="test card-container box-shadow mx-3 ">
                <div className="row  m-0 align-items-center">
                  <div className="col-6 p-0">
                    <img src={man} alt="" className="img-fluid" />
                  </div>
                  <div className="col-6 ps-4">
                    <h2 className="fs-3 poppins-medium mb-0">
                      <span className="fs-1 poppins-bold">5.0</span>stars
                    </h2>
                    <p className="text-star mb-4">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="fs-6 poppins-light mb-5">
                      " Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Quos rerum nobis, molestias blanditiis !"
                    </p>
                    <h3 className="pt-0 fs-3 poppins-medium">
                      charlie johnson
                    </h3>
                    <p className="poppins-extralight fs-7 mb-1">
                      From New Yourk,US
                    </p>
                  </div>
                </div>
              </div>
              <div className="test card-container box-shadow mx-3 ">
                <div className="row  m-0 align-items-center">
                  <div className="col-6 p-0">
                    <img src={man} alt="" className="img-fluid" />
                  </div>
                  <div className="col-6 ps-4">
                    <h2 className="fs-3 poppins-medium mb-0">
                      <span className="fs-1 poppins-bold">5.0</span>stars
                    </h2>
                    <p className="text-star mb-4">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="fs-6 poppins-light mb-5">
                      " Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Quos rerum nobis, molestias blanditiis !"
                    </p>
                    <h3 className="pt-0 fs-3 poppins-medium">
                      charlie johnson
                    </h3>
                    <p className="poppins-extralight fs-7 mb-1">
                      From New Yourk,US
                    </p>
                  </div>
                </div>
              </div>
              <div className="test card-container box-shadow mx-3 ">
                <div className="row  m-0 align-items-center">
                  <div className="col-6 p-0">
                    <img src={man} alt="" className="img-fluid" />
                  </div>
                  <div className="col-6 ps-4">
                    <h2 className="fs-3 poppins-medium mb-0">
                      <span className="fs-1 poppins-bold">5.0</span>stars
                    </h2>
                    <p className="text-star mb-4">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="fs-6 poppins-light mb-5">
                      " Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Quos rerum nobis, molestias blanditiis !"
                    </p>
                    <h3 className="pt-0 fs-3 poppins-medium">
                      charlie johnson
                    </h3>
                    <p className="poppins-extralight fs-7 mb-1">
                      From New Yourk,US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative z-1">
        <div className="row m-0 px-5">
          <div className="col-lg-6 pe-5">
            <h1 className="poppins-medium pe-5">
              Download Rentcars App for{" "}
              <span className="text-primary">FREE</span>
            </h1>
            <p className="poppins-extralight fs-7">
              For faster, easier booking and exclusive deals.
            </p>
            <div className="pb-4 mb-4">
              <img src={googlePlay} className="me-2" />
              <img src={appStore} className="me-2" />
            </div>
            <div className="w-75">
              <input
                id="email"
                className="form-control form-control-lg rounded-pill bg-custum  mb-4"
                type="email"
                placeholder="email"
                name="email"
              ></input>
              <input
                id="email"
                className="form-control form-control-lg rounded-pill bg-custum  mb-4"
                type="email"
                placeholder="email"
                name="email"
              ></input>
              <input
                id="email"
                className="form-control form-control-lg rounded-pill bg-custum  mb-4"
                type="email"
                placeholder="email"
                name="email"
              ></input>
              <button className="btn btn-primary d-block mx-auto px-5">
                send
              </button>
            </div>
          </div>
          <div className="col-lg-6 pt-5">
            <img src={iphone} className="img-fluid pt-5" />
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 bg-primary"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
