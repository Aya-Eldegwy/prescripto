import { assets } from "../assets/assets"

import { LazyLoadImage} from 'react-lazy-load-image-component';

const About = () => {
    return (
    <div>
        <div className="text-center text-2xl pt-5 text-gray-500">
            <p >ABOUT <span className="text-gray-700 font-medium">US</span></p>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-12 text-gray-500 ">
        <LazyLoadImage src={assets.about_image} alt=" image" className="w-full md:max-w-[370px]" />
            <div className="flex flex-col gap-6 justify-center md:w-2/4 text-sm ">
                <p>Welcome to prescripto, your trusted partner in managing your heealthcare needs converiently and effictiently. at prescriptp, we understand the challengis individuals face</p>
                <p>prescripto is committed to excellence in healthcare technology. we continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. whether you are booking your appointment or managing ongoing, care prescripto is here to support you every step of way</p>
                <b className="text-gray-800">Our Vision</b>
                <p>Our vision at prescripto is to create a seamless healthcare experience for every user. we aim to bridge the gap between patients and healthcare providers, making for you to access the care you need</p>
            </div>
        </div>
        <div className="my-4  text-xl">
            <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
        </div>
        <div className="mb-20 flex flex-col md:flex-row ">
            <div className="flex flex-col gap-4 px-10 py-8 sm:px-14 md:py-16 border text-[15px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-500">
                <b>Efficiency:</b>
                <p>Streamlined appointent scheduling that fits into your lifestyle.</p>
            </div>
            <div className="flex flex-col gap-4 px-10 py-8 sm:px-14 md:py-16 border text-[15px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-500">
                <b>Convenience:</b>
                <p>access to a network of trusted healthcare professionals in your area.</p>
            </div>
            <div className="flex flex-col gap-4 px-10 py-8 sm:px-14 md:py-10 border text-[15px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-500">
                <b>Personalization:</b>
                <p>Tailored recommendations and remindders to help you stay on top of your health. </p>
            </div>
        </div>
    </div>
    )
}

export default About
