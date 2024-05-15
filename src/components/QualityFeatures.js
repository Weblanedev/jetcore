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
          desc="Kingston operates state-of-the-art manufacturing facilities equipped with cutting-edge technology to produce a wide range of fabrics, including cotton, polyester, nylon, and blends. Our manufacturing processes prioritize efficiency, sustainability, and quality control to ensure consistent and superior products."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Supply Chain Management"
          desc="With a robust supply chain network and strategic partnerships with suppliers worldwide, Kingston offers comprehensive supply chain management services. From sourcing raw materials to logistics and distribution, we optimize every aspect of the supply chain to deliver cost-effective solutions and meet our clients' diverse needs."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Exceptional Service"
          desc="At Kingston, we prioritize customer satisfaction and strive to provide exceptional service at every stage of the process. Our dedicated customer support team is available to assist clients with inquiries, orders, and any other needs they may have, offering prompt and personalized assistance to ensure a seamless experience."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Quality Assurance"
          desc="Quality is at the forefront of everything we do at Kingston. We adhere to stringent quality assurance protocols throughout the manufacturing process, conducting rigorous testing and inspection to ensure that our fabrics meet the highest standards of durability, performance, and safety."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
