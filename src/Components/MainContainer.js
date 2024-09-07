import ButtonList from "./ButtonList";
import { YOUTUBE_VIDEO_CATEGORY_LIST } from "../Utils/constants";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../Utils/appSlice";

const MainContainer = ()=>{

    const dispatch = useDispatch();
    const categories = useSelector((store)=>store.app.videoCategories);
    const categoryId = useSelector((store)=>store.app.videoCategoryId);

    const fetchYouTubeCategories = async () => {
        try{
            const response = await fetch(`${YOUTUBE_VIDEO_CATEGORY_LIST}`);
            if(response.status === 403) return dispatch(addCategories([]));
            const data = await response.json();
            dispatch(addCategories(data.items));
        }
        catch(error){
            console.log("Error in fetching Categories " + error)
        }
    }

    useEffect(()=>{
        if( categories.length === 0 ) fetchYouTubeCategories();
    },[categories]);

    return(
        <div className="flex flex-col p-3 border w-[86%]">
            <div className="flex gap-4 p-2 overflow-x-scroll whitespace-nowrap">
                <ButtonList key="all-btn" isActive={ categoryId === "all" || categoryId === null} info={{id:'all',snippet:{title:'All'}}} />
                {
                    categories && categories.map((item)=>(
                        <ButtonList key={ item.id }  isActive={ categoryId === item.id } info={ item }/>
                    ))
                }
            </div>
            <div className="flex flex-wrap gap-3 mt-2">  
                <VideoContainer categoryId={categoryId}/>
            </div>
        </div>
    )
}

export default MainContainer;