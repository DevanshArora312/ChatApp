import landing from '../assets/landing-image.png'
import {motion } from "framer-motion"
import {AiOutlineSearch} from 'react-icons/ai'
import '../App.css'; 
import BetterNavBar from '../sections/BetterNavBar';
import { staggerContainer , textVariant,fadeIn} from '../utils/motion';
import landing2 from "../assets/landing2.png"
import landing3 from "../assets/landing3.png"
import Footer from '../sections/Footer';

import Chats from '../components/chats';

const LandingPage = () => {
    window.onbeforeunload = () => {
        console.log("run");
        window.scrollTo({
            top: -10,
            left: -10,
          });
    }
    return ( 
        <div style={{backgroundColor:"#FCF5EB"}} className=''>  
            <BetterNavBar />
            <div className='flex justify-center mt-10 w-full '>
                <img 
                    src={landing} 
                    className=' w-[95%] rounded-[20px] object-cover min-h-[550px] '
                />
                <motion.div 
                 variants={staggerContainer}
                 className='absolute flex left-[13vw] max-md:flex-col-reverse max-md:text-sm max-lg:text-lg text-2xl max-md:left-[5vw] max-md:top-[50%] -z-1'
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: false, amount: 0.25}}
                >   
                    <div className='relative xl:pt-[20%] md:pt-[12%] '>
                        <motion.h1 variants={textVariant(.2)} className='font-semibold'>Message<br/> Privately</motion.h1>
                        <motion.p  variants={textVariant(.5)} className='mt-5'>Simple, reliable, private messaging and <br className='max-md:hidden'/> calling for free*, available all over the<br/> world.</motion.p>
                        <motion.button variants={textVariant(.7)} className='md:text-[20px] border-black border rounded-[50px] bg-blue-700 px-8 py-3 text-black mt-5 focus:outline-none flex items-end'>
                            Explore Now <AiOutlineSearch className='mb-[5px] ml-2'/>
                        </motion.button>
                    </div>
                    <div className=''>
                        <Chats/>
                    </div>
                </motion.div>
            </div>
            <motion.div
             variants={staggerContainer} 
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.25}}
             className='items-center text-black'
            >
                <motion.img
                    src = {landing2}
                    variants={fadeIn('up', 'tween', 0, 0.5)}
                    className='w-[95%] bg-transparent mx-auto my-2'
                />
                <motion.p variants={textVariant(0.4)} className='leading-tight text-center w-full whitespace-normal py-5 lg:text-[45px] px-[20%] max-md:text-md md:text-[25px]'>
                With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.
                </motion.p>

                <motion.img
                    src = {landing3}
                    variants={fadeIn('up', 'tween', 0.7, 0.5)}
                    className='w-[95%] bg-transparent mx-auto my-2'
                />
            </motion.div>
            
            <Footer/>
        </div>
     );
}
 
export default LandingPage;