import { LazyLoadImage } from "react-lazy-load-image-component"
import { assets } from "../assets/assets"


const Header = () => {
    return (
    <div className="flex flex-col md:flex-row  bg-primary rounded-lg  px-6 md:px-8 lg:px-20">
    {/* left side */}
    <div className="  m:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 m-auto py-6 md:py-[7vw] lg:mb-[-30px] ">
        <p className=" tex-4xl md:text-2xl lg:text-4xl font-medium text-white leading-tight  lg:leading-tight ">
            Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 text-white text-sm font-light">
            <img src={assets.group_profiles} alt="" className=" md:w-20 lg:w-28" />
            <p className=" px-1 md:px-0 text-center md:text-start md:text-xs">Simply browse through our extensive list of trusted doctors,<br className="hidden lg:block" />
            schedule your appointment hassle-free.
            </p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 bg-white rounded-full px-8 py-3 m-auto md:m-0 text-gray-600 text-sm hover:scale-105 transition-all duration-300">
        Book Appointment  <img src={assets.arrow_icon} alt="" />
        </a>
    </div>
    {/* right side */}
    
        <div className=" md:w-1/2 md:relative">
        <LazyLoadImage  src={assets.header_img} alt="image" className="w-full h-auto md:absolute md:bottom-0 rounded-lg"/>
        </div>

    
    </div>
    )
}

export default Header
