import { LazyLoadImage } from "react-lazy-load-image-component"
import { assets } from "../assets/assets"


const Contact = () => {
    return (
    <div>
    <div className="text-center pt-10 text-2xl text-gray-500">
        <p>CONTACT<span className="text-gray-700 font-semibold">US</span></p>
    </div>
    <div className="flex flex-col md:flex-row justify-center gap-8 my-10 mb-28 text-sm">
        <LazyLoadImage src={assets.contact_image} alt="image" className="w-full md:max-w-[360px]" />
        <div className="flex flex-col justify-center gap-6 items-start">
            <p className="font-semibold  text-lg text-gray-600">Our OFFICE</p>
            <p className="text-gray-500">67538 Wilms Station <br /> Suite 354, Washington, USA</p>
            <p className="text-gray-500">Tel: (564) 6655-0567 <br /> Email: ayagamalsaber1611@gmail.com</p>
            <p className="font-semibold text-lg text-gray-600">Careers at PAESCRIPTO</p>
            <p className="text-gray-500">Learn more about our teams and job openings.</p>
            <button className="border border-black px-8 py-4 text-sm">Explore</button>
        </div>
    </div>
    </div>
    )
}

export default Contact
