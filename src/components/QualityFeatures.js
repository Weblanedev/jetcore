import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      {/* <Image src={imgSrc} width={80} height={80} alt="features" /> */}
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="services">
      <span className="service-name text-center ">WHY US</span>
      <h2 className="title text-center ">We're committed to delivering excellence every step of the way</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Convenience"
          desc="With multiple pickup and drop-off locations, flexible rental options, and hassle-free financing, we make it easy to get you on the road."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="We offer exclusive partnership deals and trade discounts for interior designers, architects, contractors, and other trade professionals."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Exceptional Service"
          desc="Our friendly and knowledgeable staff are dedicated to providing you with a seamless car rental or purchase experience."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="At QWICQ Technologies Ltd, we're dedicated to providing exceptional customer support to ensure that your experience with us is nothing short of excellent."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
