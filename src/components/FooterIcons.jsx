import {FaInstagram,FaFacebookF,FaYoutube} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";

const FooterIcons = () => {
    const IconStyle = "bg-black border-white border-2 text-white rounded-full w-[48px] h-[48px] p-[10px] mx-4 max-sm:mx-2 max-sm:w-[40px] max-sm:h-[40px]";
    
    return (  
        <div className="flex justify-between flex-wrap "> 
            <button className="focus:outline-none">
                <BsTwitter className={IconStyle}/>
            </button>
            <button className="focus:outline-none">
                <FaYoutube className={IconStyle}/>
            </button>
            <button className="focus:outline-none">
                <FaInstagram className={IconStyle}/>
            </button>
            <button className="focus:outline-none">
                <FaFacebookF className={IconStyle}/>
            </button>
        </div>
    );
}
 
export default FooterIcons;