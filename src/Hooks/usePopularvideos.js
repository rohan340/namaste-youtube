import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../Utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../Utils/appSlice";

const usePopularVideos = ()=>{
    const dispatch = useDispatch();
    const popularVideos = useSelector((store)=>store.app.popularVideos);

    const fetchYoutubePopularVideos = async()=>{
        try{
            const data = await fetch(YOUTUBE_API_URL);
            const json = await data.json();
            dispatch(addPopularVideos(json.items));
        }
        catch(error){
            console.log("Error in fetching Popular videos " + error);
        }   
    }

    useEffect(()=>{
        if(popularVideos === null) fetchYoutubePopularVideos();
    },[]);

    return popularVideos;
}

export default usePopularVideos;