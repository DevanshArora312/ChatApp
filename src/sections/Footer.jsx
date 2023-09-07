import {PiChatsTeardropDuotone} from "react-icons/pi"
import {AiOutlineSearch} from "react-icons/ai"
import FooterIcons from "../components/FooterIcons";
const Footer = () => {
    const a_style = "block text-white hover:underline hover:text-white my-4 underline-offset-2 max-[550px]:text-xs"
    return (  
        <div className="bg-[#111B21]">
            <div className="rounded-b-3xl bg-blue-100 h-10">

            </div>
            <div className="h-auto justify-between max-lg:w-full w-3/4 mx-auto flex-col py-8">
                <div className="flex justify-center sm:hidden">
                    <FooterIcons/>
                </div>
                <hr className="bg-white my-5 lg:hidden "/>
                <div className="flex justify-between sm:mb-20 max-lg:mx-10">
                    <div className="text-white flex flex-col justify-between max-lg:hidden">
                        <div className="flex text-2xl font-bold">
                            <PiChatsTeardropDuotone className="text-[40px] items-baseline mr-2"/>
                            ChatApp
                        </div>
                        <button className='text-sm border-black border rounded-[50px] bg-blue-700 px-5 py-3 text-black mt-5 focus:outline-none flex '>
                            Explore Now <AiOutlineSearch className='mb-[5px] ml-2'/>
                        </button>
                    </div>
                    <div className="flex-col justify-around max-[550px]:mr-2">
                        <p className="text-xs mb-8">What do we do</p>
                        <a href="#" className={a_style}> Features </a>
                        <a href="#" className={a_style}> Blogs </a>
                        <a href="#" className={a_style}> Security </a>
                        <a href="#" className={a_style}> For Buisness </a>
                    </div>
                    <div className="flex-col justify-around max-[550px]:mx-2">
                        <p className="text-xs mb-8">Who we are</p>
                        <a href="#" className={a_style}> About Us </a>
                        <a href="#" className={a_style}> Careers </a>
                        <a href="#" className={a_style}> Brand Centers</a>
                        <a href="#" className={a_style}> Privacy </a>
                    </div>
                    <div className="flex-col justify-around max-[550px]:mx-2">
                        <p className="text-xs mb-8">Use ChatApp</p>
                        <a href="#" className={a_style}> Android </a>
                        <a href="#" className={a_style}> Iphone </a>
                        <a href="#" className={a_style}> Mac/PC </a>
                        <a href="#" className={a_style}> ChatApp Web </a>
                    </div>
                    <div className="flex-col justify-around max-[550px]:mx-2">
                        <p className="text-xs mb-8">Need help?</p>
                        <a href="#" className={a_style}> Contact Us</a>
                        <a href="#" className={a_style}> Help Center </a>
                        <a href="#" className={a_style}> Corona Virus </a>
                        <a href="#" className={a_style}> Security Advisories </a>
                    </div>
                    
                </div>
                <div className="lg:hidden flex justify-between max-sm:hidden px-5">
                    <button className='text-sm border-black border rounded-[50px] bg-blue-700 px-5 py-3 text-black mt-5 focus:outline-none flex '>
                        Explore Now <AiOutlineSearch className='mb-[5px] ml-2'/>
                    </button>
                    <FooterIcons/>
                </div>
                <hr className="bg-white my-5 max-lg:w-full "/>
                <div className="flex justify-between flex-wrap max-sm:justify-center">
                    <div className="text-sm mx-2">2023 © WhatsApp<br/> LLC</div>
                    <div className="text-sm mx-2">Terms & Privacy<br/>  Policy</div>
                    <div className="max-lg:hidden">
                        <FooterIcons /> 
                    </div>
                    <select className="max-[350px]:mt-5 border-2 rounded-full max-md:text-xs max-md:px-2 min-w-[100px] w-[15%] font-semibold border-white text-white bg-transparent py-2 px-5"> <option default>English</option> </select>
                </div>                
            </div>
        </div>
    );
}
 

export default Footer;