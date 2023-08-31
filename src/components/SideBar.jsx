import {Link} from "react-router-dom";

const Sidebar = () => {
    const sideItem = {
        padding: "1rem",
        fontSize: "15px",
    }
    const sideBarStyle = {
        borderRadius: "10px",
        height: "calc(100vh - 5rem)", 
        width: 0,
        position: "relative", 
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "white",
        overflowX: "hidden", 
        paddingTop: "30px", 
        transition: "0.5s", 
    }
    return ( 
        <div id="sideBar" style={sideBarStyle}>
            <div style = {sideItem}>
                <Link to ="/home" style={{textDecoration:"none",color:"black"}}>Home</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to="/login" style={{textDecoration:"none"}}>Login </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to = "/signup" style={{textDecoration:"none"}}>Sign-Up</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                Donate
            </div>
            <hr style={{
                width:"100%"
            }}/>
        </div>
     );
}
 
export default Sidebar
