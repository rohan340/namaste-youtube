import { Link } from "react-router-dom";
import VideoCards from "./VideoCards";
import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../Utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../Utils/appSlice";

const VideoContainer = () => {

    const dispatch = useDispatch();
    const popularVideos = useSelector((store)=>store.app.video.popularVideos);
    const paginationToken = useSelector((store)=>store.app.video.nextPageToken);

    const fetchYoutubePopularVideos = async(pageToken = '')=>{
        try{
            const data = await fetch(`${YOUTUBE_API_URL}&pageToken=${pageToken}`);
            const json = await data.json();
            dispatch(addVideos({
                videos:json.items,
                nextPageToken: json.nextPageToken
            }));
        }
        catch(error){
            console.log("Error in fetching Popular videos " + error);
        }   
    }

    const handleScroll = ()=>{
        if(document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight){
            if(paginationToken){
                fetchYoutubePopularVideos(paginationToken);    
            }
        }
    }

    useEffect(()=>{
        if(popularVideos.length === 0) fetchYoutubePopularVideos();
    },[]);

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[handleScroll])

    if (popularVideos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {popularVideos.length > 0 && popularVideos.map(( video, index ) => (
                <Link key={ index } to={"/watch?v=" + video.id}><VideoCards info={video} /></Link>
            ))}
        </>
    );
};

export default VideoContainer;