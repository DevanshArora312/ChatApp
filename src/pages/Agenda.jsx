import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Calendar from 'react-calendar'; 
import AgendaData from '../AgendaData';
import './Agenda.css';
function Agenda() {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date())
    const [Xorient, setXorient] = useState(false);
    const [modal, setModal] = useState(false);
    return (
        <div className="w-screen h-screen flex justify-center items-center relative">
            <div className="text-[#757575] outline-none border-none">
                <Calendar onChange={(newDate)=>{
                                                    setDate(newDate);
                                                    if(modal){
                                                        new Promise((resolve, reject)=>{
                                                            setModal(false);
                                                            setTimeout(()=>{
                                                                resolve(1);
                                                            }, 200)
                                                        }).then(()=>{
                                                                console.log('here');
                                                                setModal(true);
                                                        })
                                                    }
                                                    else
                                                        setModal(true);
                                                }} value={date}/>
            </div>
            <div className={`w-[350px] aspect-square absolute bg-graphite flex flex-col justify-between bg-opacity-50 rounded-md py-4 px-2 duration-200 ${modal ? `scale-100` : `scale-0`}`}>
                <div className='text-center font-bold text-slate-500'>MY AGENDA</div>
                <div className='w-full relative cursor-pointer ' onMouseEnter={()=>{setXorient(true)}}
                                                                 onMouseLeave={()=>{setXorient(false)}} 
                                                                 onClick={()=>{
                                                                            new Promise((resolve, reject)=>{
                                                                                setXorient(false);
                                                                                setTimeout(()=>{
                                                                                    resolve(1);
                                                                                }, 200)
                                                                            }).then(()=>{
                                                                                navigate('/agenda/create')
                                                                            })}}>
                    <button className='w-full text-slate-500 font-bold'>ADD AGENDA</button>
                    <div className={Xorient ? 'bg-slate-600/40 h-[24px] absolute top-0 left-0 right-0 bottom-0 duration-200 -z-1 rotate-45' : 'bg-slate-600/50 h-[24px] absolute top-0 left-0 duration-200 right-0 bottom-0 -z-1'} ></div>
                    <div className={Xorient ? 'bg-slate-600/40 h-[24px] absolute top-0 left-0 right-0 bottom-0 duration-200 -z-1  -rotate-45' : 'bg-slate-600/50 h-[24px] absolute top-0 left-0 duration-200 right-0 bottom-0 -z-1'} ></div>
                </div>
            </div>
        </div>
    )
}

export default Agenda;