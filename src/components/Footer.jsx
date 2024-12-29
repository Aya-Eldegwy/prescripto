import { assets } from "../assets/assets"


const Footer = () => {
    return (
    <div className="md:mx-10">
        <div className="flex flex-col md:grid grid-cols-[3fr_2fr_2fr]  gap-10 my-10 mt-40 text-sm">
            {/* lsft side */}
            <div >
                <img src={assets.logo} alt='logo' className="w-36 mb-5" />
                <p className="w-full sm:w-2/3 leading-6  text-gray-600 text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque, magni quam veniam facilis, 
                    ea blanditiis
                </p>
            </div>
            {/* center side */}
            <div >
                <p className="text-base font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right side */}
            <div >
                <p className="text-base font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col text-gray-600 gap-2">
                    <li>+1-223-766-5643</li>
                    <li>ayagamalsaber1611@gmail.com</li>
                </ul>
            </div>
        </div>
          {/* copyright */}
        <div className="">
                <hr />
                <p className="text-center py-5 text-sm">Copyright 2024@ prescripto - All Right Reserved.</p>
            </div>
    </div>
    )
}

export default Footer
