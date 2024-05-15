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
            About Kingston
            </h2>
          </div>
          <p className="leading-loose">
          Kingston is a leading provider of textile solutions, specializing in the production and distribution of high-quality fabrics for various industries, Kingston has built a reputation for excellence through its commitment to innovation, quality craftsmanship, and customer satisfaction.
          </p>
          <p className="leading-loose">
          Our mission at Kingston Manufacturing and Supply Co. is to deliver exceptional textile solutions that exceed our customers' expectations. We strive to innovate continuously, uphold the highest standards of quality, and foster strong partnerships with our clients to drive mutual success.
          </p>
          <p className="leading-loose">
          As a forward-thinking company, Kingston is committed to driving innovation and sustainability in the textile industry. We aim to leverage emerging technologies, enhance our environmental stewardship practices, and expand our product offerings to anticipate and meet the evolving needs of our customers and the market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
