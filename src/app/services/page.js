"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Features from "@/components/Features";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

const Plan = ({ title }) => {

  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-blue-600 text-xl" />
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
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-6 rounded-3xl border-neutral-200 border">
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
        {/* <Plan title={titleOne} />
        <Plan title={titleTwo} />
        <Plan title={titleThree} />
        <Plan title={titleFour} /> */}
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
            className="w-fit capitalize text-base hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-blue-600 hover:border-blue-600 hover:text-white rounded-full">
            {btnText}
          </p>
        </Link>
        <span className="block text-blue-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="pt-[150px] flex flex-col gap-y-[70px] container mx-auto">
      <div>
        <span className="service-name text-center">Our Services</span>
        <h2 className="title text-center">Purchase services we provide</h2>
      </div>
      <div className="grid grid-cols-3 gap-[40px]">
        <PricingCard
          name="Textile sourcing and procurement services"
          title="Elevate your brand with Kingston Manufacturing's private labeling and branding services. We understand the importance of brand identity and offer comprehensive solutions to help you showcase your unique vision and style."
          price="90"
          image="https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Textile consulting and design assistance"
          title="Unlock the full potential of your textile projects with Kingston Manufacturing's consulting and design assistance services."
          price="200"
          image="https://images.pexels.com/photos/7147479/pexels-photo-7147479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Private labeling and branding services"
          title="Simplify your textile supply chain with Kingston Manufacturing's sourcing and procurement services. We understand the complexities of sourcing raw materials and managing suppliers, and we offer comprehensive solutions to streamline the process and optimize efficiency."
          price="300"
          image="https://images.pexels.com/photos/7256871/pexels-photo-7256871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
      </div>
    </div>
  )
}

export default page