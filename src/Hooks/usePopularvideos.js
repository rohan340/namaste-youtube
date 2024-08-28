import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../Utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../Utils/appSlice";

const usePopularVideos = () => {
    const dispatch = useDispatch();
    const popularVideos = useSelector((store)=>store.app.popularVideos);
    const nextPageToken = useSelector((store)=>store.app.nextPageToken);

    const fetchYoutubePopularVideos = async(pageToken = '')=>{
        try{
            const data = await fetch(`${YOUTUBE_API_URL}&pageToken=${pageToken}`);
            const json = await data.json();
            console.log(json)
            dispatch(addPopularVideos(json.items)); 
        }
        catch(error){
            console.log("Error in fetching Popular videos " + error);
        }   
    }

    const handleScroll = ()=>{
        if(document.documentElement.scrollTop + window.innerHeight + 1 > document.documentElement.scrollHeight){
            fetchYoutubePopularVideos(nextPageToken);
        }
    }

    useEffect(()=>{
        if(popularVideos === null) fetchYoutubePopularVideos();
    },[]);

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[nextPageToken])

    return popularVideos;
}

export default usePopularVideos;