import {React, useState} from 'react';
import background from '../assets/background.png';
import {Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
const LoginPage = () => {
    const [formData, setFormData] = useState({email:"", password:""});
    const submitHandler = (event) => {
        event.preventDefault();
    }
    const changeHandler = (event)=>{
        setFormData((prev)=>{
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    console.log(formData);
    return ( 
        <div className='relative w-screen h-screen'>
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.2)',
                }}
                className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
            >
            </div>
            <div className='absolute flex justify-center items-center inset-0'>
                <div className='w-[25%] min-w-[500px] aspect-[9/10] bg-white/10 rounded-md flex flex-col items-center justify-center gap-4'>
                    <p className='text-white text-center text-[1.25rem]'>WELCOME BACK</p>
                    <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-4 p-5'>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2' name="email" id="email" type='email' placeholder='sqpants@gmail.com' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2' name="password" id="password" type='password' placeholder='wh1t3_p4nt$' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full'>
                            <button className='w-full '>
                                LOG IN
                            </button>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-[45%] h-[2px] bg-black'></div>
                            <div>OR</div>
                            <div className='w-[45%] h-[2px] bg-black'></div>
                        </div>
                        <div className='w-full'>
                            <button className='w-full flex items-center justify-center gap-8'>
                                    <FcGoogle style={{fontSize:'2rem'}}/> SIGN UP WITH GOOGLE
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center gap-2'>
                            <div>DON'T HAVE AN ACCOUNT?</div>
                            <Link to='/signup'>Request Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
