import ButtonList from "./ButtonList";
import { YOUTUBE_VIDEO_CATEGORY_LIST } from "../Utils/contants";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../Utils/appSlice";

const MainContainer = ()=>{

    const dispatch = useDispatch();
    const categories = useSelector((store)=>store.app.videoCategories);

    const fetchYouTubeCategories = async () => {
        try{
            const response = await fetch(`${YOUTUBE_VIDEO_CATEGORY_LIST}`);
            const data = await response.json();
            dispatch(addCategories(data.items));
        }
        catch(error){
            console.log("Error in fetching Categories " + error)
        }
    }

    useEffect(()=>{
        fetchYouTubeCategories();
    },[]);

    return(
        <div className="flex flex-col p-3 border shadow-lg w-[86%]">
            <div className="flex gap-4 p-2 overflow-x-scroll whitespace-nowrap">
                {
                    categories && categories.slice(0,15).map((item, id)=>(
                        <ButtonList key={ id } info={ item }/>
                    ))
                }
            </div>
            <div className="flex flex-wrap">
                <VideoContainer />
            </div>
        </div>
    )
}

export default MainContainer;