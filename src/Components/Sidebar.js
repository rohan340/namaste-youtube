import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { sideBarrItems } from "../Utils/contants";

const Sidebar = ()=>{
    return(
        <div className="sidebar w-1/6 p-1">
            <div className="flex flex-col gap-1 mt-3">
                <Link to="/">
                    <div className="hover:bg-gray-200 cursor-pointer flex items-center p-2 rounded">
                        <FontAwesomeIcon className="ml-1" icon={ faHome } />
                        <span className="ml-3">Home</span>
                    </div>
                </Link>
                {
                    sideBarrItems.map((item, index)=>(
                        <Link key={ index } to={ item.path }>
                            <div className="hover:bg-gray-200 cursor-pointer flex items-center p-2 rounded">
                                <img className="w-4 ml-1" src={ item.url } />
                                <span className="ml-3">{ item.name }</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;