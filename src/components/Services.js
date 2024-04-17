"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src="https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            alt="video banner"
            className="object-contain w-full rounded-3xl"
          />
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
           
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
            About PsalmsTones Technologies Ltd
            </h2>
          </div>
          <p className="leading-loose">
          Welcome to QWICQ LTD, your one-stop destination for all your car needs. Whether you're looking to rent a vehicle for a weekend getaway or purchase your dream car, we've got you covered. Explore our wide range of rental options or browse through our inventory of quality pre-owned vehicles for sale. With competitive prices and exceptional service, we're committed to making your car rental or purchase experience seamless and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
