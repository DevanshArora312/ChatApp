import { FaChevronDown } from "react-icons/fa";
import {PiChatsTeardropDuotone} from "react-icons/pi"
import {AiOutlineSearch} from 'react-icons/ai'
import {GiHamburgerMenu} from "react-icons/gi"

const BetterNavBar = () => {
    const buttonStyle = "focus:outline-none bg-transparent flex items-end border-b-2 border-transparent hover:border-blue-500 duration-700 ease";
    return (  
        <div className="z-2 text-black text-lg flex justify-between bg-[#FCF5EB]/80 w-full h-[15%] py-5 px-8 sticky top-0 left-0 overflow-hidden ">
            <div className="lg:hidden items-center flex">
                <button>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className="text-blue-500 text-2xl strong font-bold flex max-lg:text-md">
                <PiChatsTeardropDuotone className="text-[40px] items-baseline mr-2"/>
                ChatApp
            </div>
            <div className="bg-black text-white lg:hidden">
                ??
            </div>
            <div className="flex justify-around w-[50%] items-center max-lg:hidden">
                <button className={buttonStyle}> 
                    Features
                    <FaChevronDown className="my-[3px]"/>
                </button>
                <button className={buttonStyle}>Blogs</button>
                <button className={buttonStyle}>Join us</button>
                <button className={buttonStyle}>Download</button>
                <button className={buttonStyle}>Hehe Boi</button>
            </div>
            <div className="flex justify-around items-center max-lg:hidden">
                <button className="focus:outline-none bg-transparent flex items-end border-b-2 border-transparent hover:border-blue-500 duration-700 ease">ChatApp Web</button>
                <button className='ml-5 border-black border rounded-[50px] bg-blue-700 px-5 py-3 text-black focus:outline-none flex items-end'>
                    Explore Now <AiOutlineSearch className='mb-[5px] ml-2'/>
                </button>
            </div>
        </div>
    );
}
 
export default BetterNavBar;