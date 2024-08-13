import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = ()=>{
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    console.log(isMenuOpen)
    return(
        <div className="flex">
            { isMenuOpen && <Sidebar /> }
            <MainContainer />
        </div>
    )
}

export default Body;