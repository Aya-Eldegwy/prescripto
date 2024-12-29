import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";


const Appointment = () => {
    const {docId}= useParams();
    const {doctors, currencysymbol} = useContext(AppContext);
    const dayOfWeeks=['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const [docInfo,setDocInfo]=useState(null);
    // slots
    const [docSlots,setDocSlots]=useState([]);
    const [slotsIndex,setSlotsIndex]=useState(0);
    const [slotsTime,setSlotsTime]=useState('');

    const fetchDocInfo= async () => {
        const docInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(docInfo);
    };
    // slots
    const gatAvailableSlots = async () => {
        setDocSlots([]);
        let today= new Date();

        for(let i=0; i< 7; i++){
            // getting date with index
            let currentDate= new Date(today);
            currentDate.setDate(today.getDate() + i);

            // setting endtime of the date with index
            let endTime= new Date();
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21,0,0,0);
            

            // setting hours
            if(today.getDate()=== currentDate.getDate()){
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1: 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            }
            else{
                currentDate.setHours(10);
                currentDate.setMinutes(30)
            }

            // add currentdate to arry
            let timeSlots=[]
            while(currentDate < endTime){
                let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});
                timeSlots.push({
                    datetime:new Date(currentDate),
                    time:formattedTime,
                })
                 // increment current time by 30 minute
            currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setDocSlots(prev=> ([...prev,timeSlots]))
        
        }
    }
    useEffect(()=>{
        fetchDocInfo();
    },[doctors,docId])
    //  slots

    useEffect(() =>{
        gatAvailableSlots();
    },[docInfo])

    return docInfo &&  (
    <div id="scroll">
    {/* doc details */}
    <div className="flex flex-col sm:flex-row gap-4">
        <div >
            <img src={docInfo.image} alt="doc image" className="bg-blue-50 w-full sm:max-w-72 rounded-lg" />
        </div>
        {/* docinfo,name,degree,experience */}
        <div className=" flex-1 border border-blue-100 rounded-lg p-8 py-7  mx-3 sm:mx-0  sm:mt-0 ">
            <p className="flex items-center gap-2 text-lg  lg:text-3xl  font-medium text-gray-900">
                {docInfo.name} <img src={assets.verified_icon} alt="verified icon" className="w-4" />
            </p>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <p className="">{docInfo.degree} -{docInfo.speciality}</p>
                <button className="py-0.5 px-1 sm:px-2 border rounded-full text-xs ">{docInfo.experience}</button>
            </div>
            {/* about doc */}
            <div>
                <p className="flex items-center gap-2 mt-3 text-gray-900 font-medium">
                    About <img src={assets.info_icon} alt="" className="" />
                    
                </p>
                <p className="text-sm text-gray-600 w-full max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
            <p className="mt-1 text-gray-600 mt-4 font-medium"> Appointment Fee: <span className="text-gray-900">{currencysymbol}{docInfo.fees}</span></p>
        </div>
    </div>
    {/* slots */}
    <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
        <p className="text-lg">Booking Slots</p>
        <div className="flex gap-3 items-center overflow-x-auto mt-4 w-full " >
            {
                docSlots.length  && docSlots.map((item,index)=> item.length>0 && (
                    <div onClick={()=> setSlotsIndex(index)} key={index} className={` text-center py-5 cursor-pointer rounded-full min-w-16 flex-shrink-0 ${slotsIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`}>
                        <p>{item[0] && dayOfWeeks[item[0].datetime.getDay()]}</p>
                        <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                ))
                
            }
        </div>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {
                docSlots.length  && docSlots[slotsIndex].map((item,index)=>(
                    <p onClick={()=> setSlotsTime(item.time)} key={index} className={`text-sm font-light px-4 flex-shrink-0 py-2 rounded-full cursor-pointer ${item.time === slotsTime ? 'bg-primary text-white': 'text-gray-600 border border-gray-300'}`}>
                        {item.time.toLowerCase()}
                    </p>
                ))
            }
        </div>
        <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-2">Book an appointment</button>
    </div>
    {/* relateddoctors */}
    <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
    )
}

export default Appointment
