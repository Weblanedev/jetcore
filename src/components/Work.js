import Image from "next/image";

const WorkCard = ({ num, title, desc }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">
{desc}
      </p>
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-orange-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
         The Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title="Explore the Fleet" desc="Browse our extensive collection of cars on our website or visit our showroom to see our curated selection in person."/>
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Select Your Vehicle"
              desc="Choose the car that best suits your needs, whether it's a compact car for city driving or an SUV for a family road trip."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <WorkCard num="03" title="Pickup or Delivery" desc="Select your preferred pickup location or inquire about delivery options if available."/>
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <WorkCard num="04" title="Enjoy Your Ride" desc="Pick up your rental car at the designated location and hit the road! DriveEasy Rentals is here to make sure you have a smooth and enjoyable experience." />
        </div>
      </div>
    </section>
  );
};

export default Work;
