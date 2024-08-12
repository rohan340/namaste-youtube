import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
        <div className="flex justify-between">
            <div className="flex gap-6">
                <img 
                    className="w-6 h-6 mt-5 ml-6 cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                    alt="youtube"
                />
                <img 
                    className="h-16 cursor-pointer"
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                    alt="youtube"
                />
            </div>
            <div className="mt-4">
                <input className="w-96 border border-gray-500 p-1 rounded-l-full" type="text" />
                <button className="border border-gray-500 rounded-r-full p-1 w-10">
                    <FontAwesomeIcon icon={ faMagnifyingGlass } size="xs"/>
                </button>
            </div>
            <div className="flex hover:bg-blue-200 border border-blue-500 mr-8 mt-3 justify-center gap-3 h-10 w-32 rounded-full cursor-pointer">
                <img 
                    className="h-8 mt-1"
                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" 
                    alt="user" />
                <p className="mt-1">Sign in</p>
            </div>
        </div>
    )
}

export default Header;