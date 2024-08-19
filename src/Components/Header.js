import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const dispatch = useDispatch();

    const handleSidebar = () => {
        dispatch(toggleMenu());
    }

    const fetchSearchData = async () => {
        try{
            if(searchQuery !== ""){
                const response = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
                const json = await response.json();
                setSearchSuggestions(json?.[1]);
            }
        }
        catch(error){
            console.log("Error in fetching data" + error)
        }        
    }

    useEffect(() => {
        console.log("First timeout");
        const timer = setTimeout(() => { fetchSearchData() }, 300)
        return () => {
            console.log("Second timeout");
            clearTimeout(timer);
        }
    }, [searchQuery]);

    return (
        <div className="flex justify-between shadow-lg fixed w-full bg-white z-[1]">
            <div className="flex gap-6">
                <img
                    className="w-10 h-10 mt-3 ml-6 cursor-pointer hover:bg-gray-300 p-2 hover:rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                    alt="hamburger"
                    onClick={handleSidebar}
                />
                <Link to="/" ><img
                    className="h-16 cursor-pointer"
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                    alt="youtube"
                />
                </Link>
            </div>
            <div className="flex mt-4">
                <div className="flex flex-col">
                    <input
                        className="w-[40rem] border border-gray-500 pl-4 pt-1 pb-1 rounded-l-full"
                        type="text"
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }
                        }
                        value={searchQuery}
                        onBlur={()=> setSearchSuggestions([])}
                    />
                    {
                        searchSuggestions.length > 0 && (
                            <ul className="fixed bg-white top-[50px] w-[44%] pl-3 pt-1 pb-1 rounded-xl shadow-lg">
                                {searchSuggestions.map((item, id) => (
                                    <li key={id} className="flex gap-[14px] cursor-pointer items-center m-1"><FontAwesomeIcon icon={faMagnifyingGlass} size="xs" /> {item}</li>
                                ))
                                }
                            </ul>
                        )
                    }

                </div>

                <button className="border h-[34px] border-gray-500 rounded-r-full p-1 w-10">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" />
                </button>
            </div>
            <div className="flex hover:bg-blue-200 border border-blue-500 mr-8 mt-3 justify-center gap-3 h-10 w-32 rounded-full cursor-pointer">
                <img
                    className="h-8 mt-1"
                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    alt="user" />
                <p className="mt-1.5">Sign in</p>
            </div>
        </div>
    )
}

export default Header;