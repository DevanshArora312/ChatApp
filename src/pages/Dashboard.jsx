import { useEffect, useState } from "react";
import chatBG from '../assets/chatBG.jpg'
import chatDataModule from "../chatData";
import AgendaData from "../AgendaData";
import { Link } from "react-router-dom";
import { FaSearch, FaEllipsisV, FaPhone, FaBookmark, FaPaperPlane, FaPaperclip } from "react-icons/fa";
const Dashboard = () => {
    const { user, chatData } = chatDataModule;
    const [chatObj, setChatObj] = useState(null);
    const [date, setDate] = useState({month:null, day:null, year:null, date:null});
    const [message, setMessage] = useState('');
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'NOVEMBER', 'DECEMBER'];
    function handleKeyPress(event){
        if(event.key === 'Enter'){
            SendMessage();
        }
    }
    useEffect(()=>{
        const todayDate = new Date();
        date.month = months[todayDate.getMonth()];
        date.day = days[todayDate.getDay()-1];
        date.year = todayDate.getFullYear();
        date.date = todayDate.getDate();
        setDate({...date});
    }, []);
    function clickHander(obj){
        // mark all the unread messages ....
        obj.chat.forEach((chat)=>{
            chat.read = true;
        });
        obj.unreadMessages = 0;
        setChatObj({...obj})
    }
    function SendMessage(){
        // nothing to send ....
        if(message === '')
            return;
        // push new chat in db ....
        chatData.forEach((obj)=>{
            if(obj.username === chatObj.username){
                obj.chat.push({
                    from: user.username,
                    to: chatObj.username,
                    chat: message,
                    dated:`${date.date}-${months.indexOf(date.month)+1}-${date.year}`,
                    read: true
                })
                // push in light weight chat state variable ....
                setChatObj({...obj});
            }
        });
        setMessage('')
    }
    return (
        <div className="w-screen h-screen bg-primaryLight select-none">
            <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}} className="w-[100%] h-14 px-6 bg-sapphire flex justify-between select-none">
                <div className="flex flex-col justify-center gap-1 cursor-pointer">
                    <div className="w-8 h-[4px] bg-primaryLight"></div>
                    <div className="w-8 h-[4px] bg-primaryLight"></div>
                    <div className="w-8 h-[4px] bg-primaryLight"></div>
                </div>
                <div className="flex items-center justify-between w-[250px]">
                    <div>
                        <FaSearch style={{fontSize: '1.5rem'}} className="cursor-pointer"/>
                    </div>
                    <div>
                        <img src={user.profile_url} className="w-8 aspect-square rounded-full cursor-pointer"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-primaryLight font-bold">{user.name}</div>
                        <div className="text-sky-700 font-bold text-xs">AVAILABLE</div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-[calc(100vh-3.5rem)] p-2 bg-secondaryLight flex justify-end items-center">
                <div className="w-[95%] flex justify-between h-full">
                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}} className="w-[20%] bg-primaryLight rounded-md p-2">
                        <div className="flex justify-between w-[100%] mb-2">
                            <div className="font-bold text-sapphire tracking-wider">CHAT</div>
                            <div className="text-gray-600 bg-gray-400/20 w-16 text-center font-semibold rounded-sm cursor-pointer duration-500 hover:bg-gray-400 hover:text-white">NEW</div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200"></div>
                        <div className="flex flex-col justify-center gap-4 mt-4">
                        {
                            chatData.map((obj)=>{
                                return  (<div key={obj._id} onClick={()=>{clickHander(obj)}} className="flex justify-between items-center cursor-pointer px-2 py-1 duration-500 hover:bg-sapphire/25 rounded-md">
                                            <div className="flex items-center gap-4">
                                                <img src={obj.profile_url} className="w-8 aspect-square rounded-full cursor-pointer" />
                                                <div>
                                                    <div className="text-gray-600 font-bold capitalize">{obj.friend}</div>
                                                    {
                                                        obj.chat.length > 0 && 
                                                        <div className="text-gray-400">{`${obj.chat.at(-1).chat.substr(0, 20)}...`}</div>
                                                    }
                                                </div>
                                            </div>
                                            {
                                                obj.unreadMessages > 0 &&
                                                <div className="text-xs w-6 h-6 rounded-full bg-grass text-primaryLight flex justify-center items-center">{obj.unreadMessages}</div>
                                            }
                                        </div>)
                                })
                        }
                        </div>
                    </div>
                    <div className="rounded-md w-[50%] h-full p-2 relative">
                        {
                            chatObj === null ? 
                            <div style={{
                                backgroundImage: `url(${chatBG})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
                                filter:'brightness(1.1)'
                            }}
                            className="absolute top-0 left-0 right-0 bottom-0 rounded-md overflow-visible">
                                
                            </div>
                                : 
                            <div className="flex flex-col justify-between h-full w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <div className="uppercase text-gray-600 font-bold text-lg">{chatObj.friend}</div>
                                        <div className="flex gap-4">
                                            <FaBookmark className="text-gray-600/40"/>
                                            <FaPhone className="text-gray-600/40"/>
                                            <FaEllipsisV className="text-gray-600/40"/>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-gray-600/20"></div>
                                    <div className="flex flex-col gap-4">
                                        {
                                            chatObj.chat.map((message)=>{
                                                if(message.from === user.username){
                                                    return (<div key={message._id} className="flex gap-2 float-right self-end">
                                                    <div className="p-2 bg-sapphire text-primaryLight rounded-md">{message.chat}</div>
                                                    <img src={user.profile_url} className="w-10 aspect-square rounded-full cursor-pointer"/>
                                                </div>)
                                                }
                                                return (<div key={message._id} className="flex gap-2 self-start">
                                                    <img src={chatObj.profile_url} className="w-10 aspect-square rounded-full cursor-pointer"/>
                                                    <div className="p-2 bg-primaryLight text-gray-600 rounded-md">{message.chat}</div>
                                                </div>);
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <input type='text' onKeyDown={handleKeyPress} onChange={(event)=>{setMessage(event.target.value)}} placeholder='Enter Your Message Here....' value={message} className="w-full bg-primaryLight p-2 rounded-md focus:outline-none text-gray-500/60">
                                    </input>
                                    <FaPaperclip className="text-gray-600/40 absolute bottom-3 right-12 cursor-pointer"/>
                                    <FaPaperPlane onClick={SendMessage} className="absolute right-5 bottom-3 cursor-pointer text-sapphire"/>
                                </div>
                            </div>
                        }
                    </div>
                    {   
                        date.day !== null && date.month !== null && date.year !== null ? (
                            <div style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}} className="w-[20%] h-full bg-primaryLight rounded-md p-2 flex flex-col justify-between">
                                <div className="flex flex-col">
                                    <div className="text-sapphire font-bold text-lg text-center">MY AGENDA</div>
                                    <div className="w-full h-[1px] bg-gray-200"></div>
                                    <div className="flex flex-col">
                                        <div className="flex gap-2 self-start">
                                            <div className="text-lg font-bold text-grass">{date.month}</div>
                                            <div className="text-lg font-bold text-grass">{date.year},</div>
                                        </div>
                                        <div className="self-end text-grass font-bold">{date.day}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    {
                                        AgendaData.Agendas.map((Agenda)=>{
                                            const todayDate = new Date();
                                            if(Agenda.date === todayDate.getDate() && Agenda.month === todayDate.getMonth()+1 && Agenda.year === todayDate.getFullYear()){
                                                return (<div className="flex gap-4 w-full items-center">
                                                    <div className="w-2 h-2 rounded-full bg-rose-400 float-left"></div>
                                                    <div className="text-[0.9rem] font-bold text-graphite text-center">{Agenda.task.substr(0, 25)}...</div>
                                                </div>)
                                            }
                                        })
                                    }
                                    <Link to="/agenda/create" className="font-bold text-sapphire text-lg text-center cursor-pointer select-none">+ ADD NEW AGENDA</Link>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Dashboard;