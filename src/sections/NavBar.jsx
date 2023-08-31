import Sidebar from "../components/SideBar";
const sideBarView = () =>{
    console.log(document.getElementById('sideBar').style.width);
    if (document.getElementById('sideBar').style.width === "0px"){

        document.getElementById("sideBar").style.width = "250px";
            
    }
    else{
        document.getElementById("sideBar").style.width = "0px";
        
    }
    
}
const NavBar = () => {
    const headBar = {
        backgroundColor: "rgba(245, 53, 170)",
        height: "2.5rem",
        borderRadius: "20px",
        width: "100%",
        boxShadow: "0px 7.5px 10px 0px rgba(245, 53, 170)"
    }
    const menuButton ={
        borderRadius: "50px",
        height: "100%",
        background: "transparent",
        margin:"0.3rem",
        border:"none"
    }
    const menu = {
        borderRadius: "50px",
        height: "100%",
        background: "transparent",
        margin:"0.3rem",
    }
    return (
        <div style={{height:"5rem"}}>
            <div id="overlay">

            </div>
            <div style={headBar}>
                <button style={menuButton} onClick={sideBarView} className="hover:opacity:60 focus:outline-none">
                    <img alt='menuBar' style={menu} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fmenu-icon-png-3-lines%2Fmenu-icon-png-3-lines-0.jpg&f=1&nofb=1&ipt=bdace5b9476803f269117c77d27db7300d8ff07457d16dd98df846f8ec71a4f2&ipo=images"/>
                </button>
                <Sidebar />
            </div>
        </div>
    );
}


export default NavBar;