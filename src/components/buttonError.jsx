import { motion } from "framer-motion"
const ButtonError = ({text}) => {
    const animationType = {
        duration :0.175,
        ease:"easeInOut",
        repeatType:"loop",
        repeat:2,
        onanimationend:{
            rotate:"0deg"
        }
    }
    const animVariant = {
        start:{
            // x:"-5%",
            rotate : "-2deg"
        },
        end:{
            // x:"5%",
            rotate:"2deg"
        }
    }
    const divStyle = {
        borderRadius: "8px",
        border: '1px solid transparent',
        padding:" 0.6em 1.2em",
        fontSize: "1em",
        fontWeight: 500,
        fontFamily: "inherit",
        backgroundColor: "#1a1a1a",
        justifyContent :"center",
        display :  "flex",
        textAlign : "center"
    }
    return (  
    //    <motion.div variants={animVariant} initial="start" animate="end" style={divStyle} transition={animationType} exit={{x:"0"}}>
    //         LOG IN
    //    </motion.div>
    <motion.div  animate={{x:[0,-7,7,0]}} style={divStyle} transition={animationType} >
        {text}
    </motion.div>
    );
}
 
export default ButtonError;