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
            <div className="grid grid-cols-3 gap-[50px]">
                <PricingCard
                    name="Toyota Camry"
                    title="The Toyota Camry is a reliable and comfortable midsize sedan known for its spacious interior, smooth ride, and fuel efficiency. Equipped with advanced safety features and modern technology, the Camry offers a perfect blend of practicality and style."
                    price="25000"
                    image="https://images.pexels.com/photos/18186239/pexels-photo-18186239/free-photo-of-taxi-standing-in-front-of-a-crosswalk-with-the-dubai-skyline-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="Honda CR-V"
                    title="Description: The Honda CR-V is a versatile compact SUV renowned for its practicality, reliability, and spacious cabin. With ample cargo space, comfortable seating, and advanced safety features, the CR-V is an ideal choice for families and adventurers alike."
                    price="28000"
                    image="https://images.pexels.com/photos/6894420/pexels-photo-6894420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="Ford F-150"
                    title="The Ford F-150 is a legendary full-size pickup truck known for its robust performance, towing capability, and innovative features. With multiple engine options, spacious cabin, and rugged design, the F-150 is perfect for work or play."
                    price="35000"
                    image="https://images.pexels.com/photos/2791685/pexels-photo-2791685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="Tesla Model 3"
                    title="The Tesla Model 3 is an all-electric compact sedan that offers exhilarating performance, cutting-edge technology, and zero emissions. With instant acceleration, long-range capability, and advanced autopilot features, the Model 3 redefines the driving experience."
                    price="45000"
                    image="https://images.pexels.com/photos/11099564/pexels-photo-11099564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="Chevrolet Silverado"
                    title="The Chevrolet Silverado is a tough and capable full-size pickup truck designed to handle the toughest jobs. With powerful engine options, spacious cabin, and innovative towing features, the Silverado is ready for any task."
                    price="30000"
                    image="https://images.pexels.com/photos/12295402/pexels-photo-12295402.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    btnText="Purchase"
                    titleOne="Sofas, couches, and sectionals"
                    titleTwo="Dining tables and chairs"
                    titleThree="Beds and mattresses"
                    titleFour="Cabinets and storage solutions"

                />
                <PricingCard
                    name="BMW 3 Series"
                    title="The BMW 3 Series is a luxury compact sedan known for its sporty performance, refined interior, and sophisticated styling. With precise handling, powerful engine options, and advanced technology, the 3 Series offers an exhilarating driving experience."
                    price="40000"
                    image="https://images.pexels.com/photos/14776717/pexels-photo-14776717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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