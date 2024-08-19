import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        <>
            <Header />
            <div className="flex relative top-[63px]">
                {isMenuOpen && <Sidebar />}
                <Outlet />
            </div>
        </>
    )
}

export default Body;