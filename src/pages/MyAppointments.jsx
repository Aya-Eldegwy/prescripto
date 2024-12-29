import { useContext } from "react"
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {
    const {doctors}=useContext(AppContext);
    return (
    <div>
    <p className="pb-3 mt-10 border-b font-medium text-zinc-700">My appointments</p>
    <div>
        {
            doctors.slice(5,10).map((item,index)=> (
                <div key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border-b py-4">
                    <div>
                        <img src={item.image} alt="image" className="w-36 rounded bg-zinc-100" />
                    </div>
                    <div className="flex-1 text-sm text-zinc-600 ">
                        <p className="text-neutral-800 font-semibold">{item.name}</p>
                        <p className="">{item.speciality}</p>
                        <p className="text-zinc-700 font-medium mt-1 ">Address:</p>
                        <p className="text-xs ">{item.address.line1}</p>
                        <p className="text-xs">{item.address.line1}</p>
                        <p className="text-xs mt1"><span className="text-neutral-700 text-sm font-medium">Time & Data: </span>25, dec, 2024 | 11:30 am </p>
                    </div>
                    <div></div>
                    <div className="flex flex-col justify-end gap-2">
                        <button className="text-sm text-center text-stone-500 py-2 sm:min-w-48 border hover:bg-primary hover:text-white transition-all duration-300 ">Pay Online</button>
                        <button className="text-sm text-center text-stone-500 py-2 sm:min-w-48 border hover:bg-red-500 hover:text-white transition-all duration-300 ">Cancel appointments</button>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
    )
}

export default MyAppointments
