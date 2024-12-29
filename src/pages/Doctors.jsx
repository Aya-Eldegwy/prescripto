import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";


const Doctors = () => {
    const {speciality}=useParams();
    const navigate=useNavigate()
    const {doctors}= useContext(AppContext);
    const [fiter,setFilter]=useState([]);
    const [showFilter,setShowFilter]=useState(false);

    const applyFilter = ()=>{
        if(speciality){
            setFilter(doctors.filter(doc=> doc.speciality === speciality))
        }
        else{
            setFilter(doctors)
        }
    };

    useEffect(()=>{
        applyFilter()
    },[doctors,speciality])
    return (
    <div>
    <p className="text-gray-600">Browse through doctors specialist.</p>
    <div className="flex flex-col md:flex-row items-start gap-4 mt-5">
        <button onClick={()=> setShowFilter(prev=> !prev)} className={`px-3 py-1 text-sm font-light rounded border sm:hidden ${showFilter?'bg-primary text-white': ''}`} >Filters</button>
        <div className={`flex flex-col gap-4 text-gray-600 md:w-1/4 ${showFilter ? 'flex': 'hidden sm:flex'} `}>
            <p onClick={()=> speciality === 'General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded cursor-pointer transition-all ${speciality === 'General physician'? 'bg-stone-100 text-black': ''} `}>General physician</p>
            <p  onClick={()=> speciality === 'Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded cursor-pointer transition-all ${speciality === 'Gynecologist'? 'bg-stone-100 text-black': ''} `}>Gynecologist</p>
            <p  onClick={()=> speciality === 'Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded cursor-pointer transition-all ${speciality === 'Dermatologist'? 'bg-stone-100 text-black': ''} `}>Dermatologist</p>
            <p  onClick={()=> speciality === 'Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded cursor-pointer transition-all ${speciality === 'Pediatricians'? 'bg-stone-100 text-black': ''} `}>Pediatricians</p>
            <p  onClick={()=> speciality === 'Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded cursor-pointer transition-all  ${speciality === 'Neurologist'? 'bg-stone-100 text-black': ''} `}>Neurologist</p>
            
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
            {
                fiter.map((item,index)=>(
                    <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500" key={index}>
                    <img src={item.image} alt="" className="bg-blue-50" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-center text-sm text-green-500">
                            <p className="w-2 h-2 rounded-full bg-green-500"></p><p>Availbale</p>
                        </div>
                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm ">{item.speciality}</p>
                    </div>
                </div> 
                ))
            }
        </div>
    </div>
    </div>
    )
}

export default Doctors
