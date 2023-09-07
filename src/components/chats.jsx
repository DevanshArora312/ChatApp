import chat1 from "../assets/chats/chat1.png"
import chat2 from "../assets/chats/chat2.png"
import chat3 from "../assets/chats/chat3.png"
import chat4 from "../assets/chats/chat4.png"
import chat5 from "../assets/chats/chat5.png"
import { staggerContainer , textVariant,fadeIn} from '../utils/motion';
import {motion} from "framer-motion"
const Chats = () => {
    const styles = 'relative left-1/3 top-[15%] w-[55%] bg-transparent max-md:left-5 max-md:w-[70%] max-lg:w-[60%] max-lg:left-[20%] max-lg:top-[20%]';
    const styles2 = 'relative left-1/3 top-[15%] w-[55%] bg-transparent max-md:left-5 max-md:w-[70%] max-md:hidden max-lg:w-[60%] max-lg:left-[20%] max-lg:top-[20%]';
    
    return (  
        <>
            <motion.img variants={fadeIn('right','tween',0,0.9)} className={styles} src = {chat1}/>
            <motion.img variants={fadeIn('left','tween',0.3,0.9)} className={styles} src = {chat2}/>
            <motion.img variants={fadeIn('right','tween',0.6,0.9)} className={styles2} src = {chat3}/>
            <motion.img variants={fadeIn('right','tween',0.9,0.9)} className={styles2 } src = {chat4 }/>
            <motion.img variants={fadeIn('left','tween',1.2,0.9)} className={styles2} src = {chat5}/>
        </>
    );
}
 
export default Chats;