import { useDispatch } from "react-redux";
import { addvideoCategoryId, removeVideos } from "../Utils/appSlice";

const ButtonList = ({ info, isActive }) => {
    const {id, snippet} = info;
    const dispatch = useDispatch();
    return (
        <>
            <button 
                onClick={()=>{ 
                    if (!isActive) {
                        dispatch(addvideoCategoryId(id));
                        dispatch(removeVideos());
                    }
                }  }
                className={`flex items-center p-1 m-1 rounded-lg ${
                    isActive ? "bg-black text-white" : "bg-gray-100"
                }`}>
                    {snippet.title}
            </button>
        </>
    )
}

export default ButtonList;