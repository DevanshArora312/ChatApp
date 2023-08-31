import {motion} from 'framer-motion';

const ButtonLoader = () => {
    const containerStyle = {
        width:"100%",
        justifyContent:"center",
        height : "100%",
        backgroundColor:"transparent",
        display:"flex",
        
    };
    const circleStyle = {
        height:"0.75rem",
        width:"0.75rem",
        borderRadius:"50%",
        margin:"10px",
        backgroundColor:"white",
        display:"block",
    };
    const circleVariant = {
        start:{
            y:"0"
        },
        end:{
            y:"100%"
        }
    }
    const containerVariant = {
        start:{
            transition:{
                staggerChildren:0.2
            }
        },
        end:{
            transition:{
                staggerChildren:0.2
            }
        }
    }
    const circleTransition ={
        ease:"easeInOut",
        duration:0.7,
        repeatType:"reverse",
        repeat:Infinity
    }
    return ( 
            <motion.div style={containerStyle} variants={containerVariant} initial="start" animate="end">
                <motion.span style = {circleStyle} variants={circleVariant} transition={circleTransition} />
                <motion.span style = {circleStyle} variants={circleVariant} transition={circleTransition} />
                <motion.span style = {circleStyle} variants={circleVariant} transition={circleTransition} />
            </motion.div>
    );
}
 
export default ButtonLoader;