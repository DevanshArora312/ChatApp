import {React, useState} from 'react';
import background from '../assets/background.png';
import {Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ButtonLoader from '../components/buttonLoader';
import NavBar from '../sections/NavBar';

const SignupPage = () => {
    const [formData, setFormData] = useState({username:"",email:"", password:""});
    const [isClicked,setisClicked] = useState(false);
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
    const clickFunc = ()=>{
        setisClicked(true);
        setTimeout(()=>{
            setisClicked(false);
        },2000);
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
                <div className='w-[25%] min-w-[500px] aspect-[9/10] bg-white/10 rounded-md flex flex-col items-center justify-center gap-4 max-sm:min-w-[250px] max-md:p-5'>
                    <p className='text-white text-center text-[1.25rem]'>WELCOME </p>
                    <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-4 p-5'>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2 ' name="username" id="username" type='text' placeholder='COD3R-4RY4N' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2 ' name="email" id="email" type='email' placeholder='sqpants@gmail.com' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2' name="password" id="password" type='password' placeholder='wh1t3_p4nt$' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full'>
                            <button className='w-full focus:outline-none' onClick={clickFunc}>
                                {!isClicked && `CREATE ACCOUNT`}
                                {isClicked && <ButtonLoader/>}
                            </button>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-[45%] h-[2px] bg-black'></div>
                            <div>OR</div>
                            <div className='w-[45%] h-[2px] bg-black'></div>
                        </div>
                        <div className='w-full'>
                            <button className='w-full flex items-center justify-center gap-8 max-sm:text-xs'>
                                    <FcGoogle style={{fontSize:'2rem'}}/> SIGN UP WITH GOOGLE
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center gap-2 max-sm:text-xs'>
                            <div>ALREADY HAVE AN ACCOUNT?</div>
                            <Link to='/login'>LOGIN HERE</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
