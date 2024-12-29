import { useState } from "react";
import { assets } from "../assets/assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyProfile = () => {
    const [userData,setUserData]=useState({
        name:'Tom Vincent',
        image:assets.profile_pic,
        email:'tomvincent@gmail.com',
        phone:'+1 106 765 5678',
        address:{
            line1:'57th Cross, Richmond',
            line2:'Circle, Church Road, London'
        },
        gender:'Male',
        dob:'2000-11-16',
    })
    const [isEdit, setIsEdit]=useState(true);
    return (
    <div className="max-w-lg flex flex-col gap-3 text-sm">
        <LazyLoadImage src={userData.image} alt="image" className="w-36 rounded"/>
    {
        isEdit 
        ? <input className="bg-gray-50 text-2xl font-medium mt-4 max-w-60 border " type="text" onChange={ e => setUserData(prev => ({...prev,name:e.target.value})) } value={userData.name} />
        : <p className="text-2xl font-medium mt-4 text-neutral-800">{userData.name}</p>
    }
    <hr className="h-[1px] border-none bg-zinc-400" />
    <div>
        <p className="text-neutral-500 mt-3 underline">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Email id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {
                isEdit 
                ? <input className="bg-gray-100 max-w-52 border" type="text" onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} value={userData.phone} />
                : <p className="text-blue-400">{userData.phone}</p>
            }
            <p className="font-medium">Address:</p>
            {
                isEdit
                ? <p>
                    <input className="bg-gray-50 border min-w-48 max-w-52  " type="text" onChange={e => setUserData(prev=> ({...prev, address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} />
                    <br />
                    <input className="bg-gray-50 border min-w-48 max-w-52 mt-1" type="text" onChange={e=> setUserData(prev=> ({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} />
                </p>
                : <p className="text-gray-500">
                    {userData.address.line1} 
                    <br />
                    {userData.address.line2}
                    </p>
            }
        </div>
    </div>
    <div>
        <p className="text-neutral-500 mt-3 underline">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] mt-3 gap-y-2.5">
        <p className="font-medium">Gender:</p>
            {
                isEdit
                ? <select className="max-w-20 bg-gray-100" onChange={e=> setUserData(prev=> ({...prev,gender:e.target.value}))} value={userData.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                : <p className="text-gray-400">{userData.gender}</p>
            }
            <p className="font-medium">Birthday:</p>
            {
                isEdit
                ? <input className="max-w-28 bg-gray-100" type="date" onChange={e=> setUserData(prev=> ({...prev,dob:e.target.value}))} value={userData.dob} />
                : <p className="text-gray-400">{userData.dob}</p>
            }
        </div>
    </div>
    <div>
        {
            isEdit
            ? <button onClick={()=> setIsEdit(false)} className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Save information</button>
            : <button onClick={()=> setIsEdit(true)} className=" border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Edit</button>
        }

    </div>
    </div>
    )
}

export default MyProfile
