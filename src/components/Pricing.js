"use client";
import Image from "next/image";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Plan = ({ title }) => {
  
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-orange-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, image, btnText, trail, titleOne, titleTwo, titleThree, titleFour }) => {
  const router = useRouter()
  const purchase = (name, price) => {
    const product = {
      name,
      price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    router.push("/billing") 
  }
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt="features"
          className="w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title={titleOne} />
        <Plan title={titleTwo} />
        <Plan title={titleThree} />
        <Plan title={titleFour} />
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span class="text-lg ml-1 font-normal text-neutral-500">
          </span>
        </h2>
        <Link href="/billing">
          <p
            onClick={() => { purchase(name, price) }}
            className="w-fit capitalize text-base hover:bg-orange-600 hover:shadow-md hover:shadow-orange-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-orange-600 hover:border-orange-600 hover:text-white rounded-full">
            {btnText}
          </p>
        </Link>
        <span className="block text-orange-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Products");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="Products"
    >
      <div>
        <span className="service-name text-center ">PRODUCTS AND SERVICES</span>
        <h2 className="title text-center xl:w-[60%] xl:mx-auto">Explore our carefully curated collection of home decor products and services</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-100 p-2 rounded-full">
        <div
          className={`${plan === "Products" ? "left-2 w-[120px]" : "left-[125px] w-[100px]"
            } transition-all duration-500 absolute top-[.37rem] h-[55px]  rounded-full bg-orange-600`}
        ></div>
        <button
          onClick={() => setPlan("Products")}
          className={`
          ${plan === "Products" ? "text-white" : "text-orange-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5  rounded-full`}
        >
          Products
        </button>
        <button
          onClick={() => setPlan("Services")}
          className={`
          ${plan === "Services" ? "text-white" : "text-orange-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5  rounded-full`}
        >
          Services
        </button>
        
      </div>

      {plan === "Products" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Furniture"
            title="Transform Your Space: Stylish Furniture for Every Room."
            price="1400"
            image="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Purchase"
            titleOne="Sofas, couches, and sectionals"
            titleTwo="Dining tables and chairs"
            titleThree="Beds and mattresses"
            titleFour="Cabinets and storage solutions"

          />
          <PricingCard
            name="Lighting Fixtures"
            title="lluminate Your Home: Discover Radiant Lighting Solutions."
            price="1900"
            image="https://images.pexels.com/photos/1146562/pexels-photo-1146562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Purchase"
            titleOne="Chandeliers"
            titleTwo="Pendant lights"
            titleThree="Table lamps"
            titleFour="Floor lamps"
          />

          <PricingCard
            name="Home Décor and Furnishings"
            title="Add the Finishing Touch: Elevate Your Decor with Stylish Accessories."
            price="2350"
            btnText="Purchase"
            image="https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titleOne="ceiling lights and pendant lights."
            titleTwo="Rugs and carpets."
            titleThree="Wall art and mirrors"
            titleFour="Throw pillows and blankets"
          />
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Interior Design Consultation"
            title="Design Your Dream Space: Personalized Consultations for Inspired Living"
            price="3500"
            btnText="Purchase"
            image="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titleOne="Personalized design consultations."
            titleTwo="Space planning and layout optimization."
            titleThree="Color palette selection and coordination."
            titleFour="Furniture and decor recommendations."
          />
          <PricingCard
            name="Custom Furniture Design"
            title="Craft Your Vision: Bespoke Furniture Designs Tailored to Your Style"
            price="5600"
            image="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Purchase"
            titleOne="Customization options for size, materials, and finishes"
            titleTwo="Collaboration with skilled craftsmen and artisans."
            titleThree="Bespoke furniture design services"
            titleFour="Digital mood boards and design concepts"
          />
          <PricingCard
            name="Home Styling Services"
            title="Curate Your Sanctuary: Professional Styling to Reflect Your Personality"
            price="9400"
            btnText="Purchase"
            image="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titleOne="Professional home staging for real estate listings."
            titleTwo="General contracting services for home renovations."
            titleFour="Event styling for parties, weddings, and corporate events."
            titleThree="Seasonal decor styling for holidays and special occasions."
          />
        </Carousel>
      )}
    </section>
  );
};

export default Pricing;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
