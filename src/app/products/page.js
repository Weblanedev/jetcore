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
        <div className="pt-[150px] flex flex-col gap-y-[100px] container mx-auto">
            <div>   <span className="service-name text-center">Our Products</span>
            </div>
            <div className="grid grid-cols-3 gap-[50px]">
                <PricingCard
                    name="Fabrics"
                    title=" we take pride in offering a diverse range of high-quality fabrics designed to meet the demands of various industries. Our extensive selection includes everything from classic cottons to durable polyesters and versatile blends. Whether you're creating apparel, home textiles, or industrial applications, our fabrics are crafted to deliver superior performance and style. From Basic Cotton to Polyester to Nylon"
                    price="45"
                    image="https://images.pexels.com/photos/7138974/pexels-photo-7138974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="TextTile Accessories"
                    title="At Kingston Manufacturing, we understand that the little details can make a big difference in textile projects. That's why we offer a comprehensive range of high-quality textile accessories to complement our fabrics and enhance your creations. From zippers to buttons, threads to trims, our accessories are designed to meet the diverse needs of designers, manufacturers, and crafters alike."
                    price="20"
                    image="https://images.pexels.com/photos/1409218/pexels-photo-1409218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="Finished Textile Products"
                    title="Kingston Manufacturing is your one-stop destination for premium finished textile products designed to elevate your home, wardrobe, or industrial applications. From luxurious apparel fabrics to durable home textiles and specialized industrial materials, our finished products are crafted with precision and care to meet the highest standards of quality and style."
                    price="150"
                    image="https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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