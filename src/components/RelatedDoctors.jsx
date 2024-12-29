import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom";


const RelatedDoctors = ({ docId , speciality}) => {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext);
    const [relatDoc,setRelatDoc]=useState([]);
    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsdata =doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelatDoc(doctorsdata);
        }

    },[doctors,docId,speciality])
    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className=" text-2xl sm:text-3xl font-medium text-center">Related Doctors</h1>
        <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6 pt-5 mx-4 sm:mx-0">
            {relatDoc.slice(0,5).map((item,index)=>(
                <div onClick={()=> { navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500" key={index}>
                    <img src={item.image} alt="" className="bg-blue-50" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-center text-sm text-green-500">
                            <p className="w-2 h-2 rounded-full bg-green-500"></p><p>Availbale</p>
                        </div>
                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm ">{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=> { navigate('/doctors');scrollTo(0,0)}} className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">More</button>
    
    </div>
    )
}

export default RelatedDoctors
