"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Features from "@/components/Features";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

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

const page = () => {
    return (
        <div className="pt-[150px] flex flex-col gap-y-[100px] container mx-auto">
            <div>   <span className="service-name text-center">Our Products</span>
                <h2 className="title text-center">Purchase any of our numerous vehicles</h2>
            </div>
            <div className="grid grid-cols-3">
                <PricingCard
                    name="Red Ferrari"
                    title="Always arrive in stile"
                    price="1400"
                    image="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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