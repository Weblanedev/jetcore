import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="container px-5 md:px-16 mx-auto flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="capitalize text-left flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[4rem] 2xl:text-5xl font-bold">
            <p>Weaving Excellence</p>
            <p>One Thread at a Time</p>
          </h1>
          <p className="text-lg leading-normal text-left w-[70%] sm:leading-loose my-4 md:my-6">
          Kingston is a leading provider of textile solutions, specializing in the production and distribution of high-quality fabrics for various industries. Kingston has built a reputation for excellence through its commitment to innovation, quality craftsmanship, and customer satisfaction.
          </p> 
        </div>
        <div className="w-full relative">
          <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0  before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0  after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
            <Image
              src="https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1100}
              height={500}
              alt="hero Image"
              className="object-contain mx-auto rounded-3xl"
            />
          </div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;
