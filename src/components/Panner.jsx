import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { LazyLoadImage } from "react-lazy-load-image-component"


const Banner = () => {
    const navigate=useNavigate()
    return (
    <div className="flex my-20 md:mx-10 bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12">
        {/* left side */}
        <div className="flex-1 py-6 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
            <div className="text-xl sm:text-2xl  lg:text-3xl text-white">
                <p className="">Book Appointment</p>
                <p className="mt-4">With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=> navigate('/login')} className="bg-white text-sm px-12 py-3 rounded-full mt-5">Create account</button>
        </div>
        {/* right sude */}
        <div className="hidden md:block relative md:w-1/2 lg:w-[370px]">
            <LazyLoadImage src={assets.appointment_img} alt="image" className="w-full absolute bottom-0 right-0 max-w-md " />
        </div>
    </div>
    )
}

export default Banner
