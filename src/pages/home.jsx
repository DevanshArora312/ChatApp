import NavBar from "../sections/NavBar";

const Home = () => {
    return ( 
        <>
            <div>
                <NavBar/>
                <div className="flex">
                    <div className=" max-sm:hidden ">
                        chats
                    </div>
                    <div>
                        chat area
                    </div>
                </div>
            </div>
        </> 
        );
}
 
export default Home;