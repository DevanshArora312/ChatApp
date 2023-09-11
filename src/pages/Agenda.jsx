import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Calendar from 'react-calendar'; 
import AgendaData from '../AgendaData';
import {AiFillCloseCircle} from 'react-icons/ai'
import {FiMaximize} from 'react-icons/fi'
import {BsDroplet} from 'react-icons/bs'
import './Agenda.css';
function Agenda() {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date())
    const [Xorient, setXorient] = useState(false);
    const [modal, setModal] = useState(0);
    // 0 ----> close
    // 1 ----> open
    // 2 ----> maximise
    // 3 ----> transparent + restored
    // 4 ----> transparent + maximised
    const [todoList, setTodoList] = useState([]);
    return (
        <div className="w-screen h-screen flex justify-center items-center relative">
            <div className="text-[#757575] outline-none border-none">
                <Calendar onChange={(newDate)=>{
                                                    setDate(newDate);
                                                    const date = newDate.getDate(), month = newDate.getMonth() + 1, year = newDate.getFullYear();
                                                    const list = [];
                                                    AgendaData.Agendas.forEach((Agenda)=>{
                                                        if(Agenda.date === date && Agenda.month === month && Agenda.year === year){
                                                            list.push(Agenda.task);
                                                        }
                                                    });
                                                    setTodoList(list);
                                                    console.log(list);
                                                    if(modal){
                                                        new Promise((resolve, reject)=>{
                                                            setModal(1);
                                                            setTimeout(()=>{
                                                                resolve(1);
                                                            }, 200)
                                                        }).then(()=>{
                                                                setModal(1);
                                                        })
                                                    }
                                                    else
                                                        setModal(1);
                                                }} value={date}/>
            </div>
            <div className={`${modal === 2 || modal === 4? `w-screen h-screen` : `w-[350px]`} aspect-square absolute ${modal === 3 || modal === 4? `bg-white/50` : `bg-white`} flex flex-col justify-between rounded-md py-4 px-2 duration-200 ${modal ? `scale-100` : `scale-0`}`}>
                <div className='flex items-center justify-between'>
                    <div className='text-center font-bold text-slate-500'>MY AGENDA</div>
                    <div className='flex gap-4'>
                        <div className='cursor-pointer text-emerald-500' onClick={()=>{
                            if(modal === 1 || modal === 2) setModal(modal + 2);
                            else setModal(modal - 2);
                        }}><BsDroplet/></div>
                        <div className='cursor-pointer text-emerald-500' onClick={()=>{
                            if(modal === 2 || modal === 4)
                                setModal(modal - 1);
                            else
                                setModal(modal + 1);
                        }}><FiMaximize/></div>
                        <div className='cursor-pointer text-red-500' onClick={()=>{
                            setModal(0);
                        }}><AiFillCloseCircle/></div>
                    </div>
                </div>
                <div className='w-full relative cursor-pointer ' onMouseEnter={()=>{
                                                                                        if(modal !== 2 && modal !== 4)
                                                                                            setXorient(true)
                                                                                    }}
                                                                 onMouseLeave={()=>{setXorient(false)}} 
                                                                 onClick={()=>{
                                                                            new Promise((resolve, reject)=>{
                                                                                setXorient(false);
                                                                                setTimeout(()=>{
                                                                                    resolve(1);
                                                                                }, 200)
                                                                            }).then(()=>{
                                                                                navigate('/agenda/create')})}}>
                    
                    <div className='flex flex-col justify-evenly'>
                        {
                            todoList.map((todo)=>{
                                return (<div className={`${modal === 3 || modal === 4 ? `text-[#757575]/50` : `text-[#757575]`} font-bold`}>{todo}</div>)
                            })
                        }
                    </div>
                    <div className='relative'>
                        <button className='w-full text-slate-500 font-bold'>ADD AGENDA</button>
                        <div className={Xorient ? 'bg-slate-600/40 h-[24px] absolute top-0 left-0 right-0 bottom-0 duration-200 -z-1 rotate-45' : 'bg-slate-600/50 h-[24px] absolute top-0 left-0 duration-200 right-0 bottom-0 -z-1'} ></div>
                        <div className={Xorient ? 'bg-slate-600/40 h-[24px] absolute top-0 left-0 right-0 bottom-0 duration-200 -z-1  -rotate-45' : 'bg-slate-600/50 h-[24px] absolute top-0 left-0 duration-200 right-0 bottom-0 -z-1'} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda;