import { useState } from "react";


const Login = () => {
    const [state,setState]= useState('sign up');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,SetName]=useState('');
    const onSubmitHandler= (event) =>{
        event.PreventDefault();
    }
    return (
    <form className="min-h-[80vh] flex items-center" onSubmit={()=> onSubmitHandler()}>
        <div className="flex flex-col gap-3 m-auto items-start border rounded-lg text-zinc-600 shadow-lg p-8 min-w-[240px] sm:min-w-96 text-sm">
        <p className="text-2xl font-semibold">{state === 'sign up'? 'Create Account': 'Login'}</p>
        <p>Please {state === 'sign up'? 'Create Account': 'Login'} to Book Appointment</p>
        {
            state === 'sign up' &&  <div className="w-full">
            <p >Full Name</p>
            <input type="text" onChange={e => SetName(e.target.value)} value={name} required className="w-full border border-zinc-300 p-2 mt-1 rounded" />
        </div>
        }
        <div className="w-full">
            <p>Email</p>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required className="w-full border border-zinc-300 p-2 mt-1 rounded" />
        </div>
        <div className="w-full">
            <p>Password</p>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required className="w-full border border-zinc-300 p-2 mt-1 rounded" />
        </div>
        <button className="bg-primary text-white text-sm py-2 rounded-md w-full">{state === 'sign up'? 'Create Account': 'Login'}</button>
        {
            state === 'sign up'
            ? <p>Already have an account? <span onClick={()=> setState('login')} className="text-primary underline cursor-pointer">Login here</span></p>
            : <p>Create an new account? <span onClick={()=> setState('sign up')}   className="text-primary underline cursor-pointer">Click here</span></p>
        }
        </div>
    </form>
    )
}

export default Login
