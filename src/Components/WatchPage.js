import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../Utils/contants";
import { convertToRelativeTime, formatViewsCount } from "../Hooks/useFormatDateView";
import Comments from "./Comments";

const WatchPage = () => {

    const [ videoDetails, setVideoDetails] = useState([]);
    const [ showMore, setShowMore] = useState(false);
    const [ error, setError] = useState(false);
    const [ searchParams ] = useSearchParams();    
    const videoId = searchParams.get("v");

    const fetchVideoDetails = async ()=>{
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics`);
            
            if(response.status === 400 || response.status === 404){
                setError(true);
                return;
            }

            const data = await response.json();
            setVideoDetails(data?.items[0])
        }
        catch(error){
            console.error("Error in fetch Video Details " + error);
        }   
    }

    useEffect(()=>{
        fetchVideoDetails();
    },[]);

    if(error){
        return <div>No Result Found</div>
    }

    if(videoDetails.length === 0){
        return <div>Loading...</div>
    }

    const { snippet, statistics } = videoDetails;

    return (
        
        <div className="flex flex-col pl-8 pt-4 gap-4 w-[70%]">
            <iframe
                className="rounded-2xl"
                width="1020"
                height="500"
                src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
            <h2 className="font-bold text-2xl">{ snippet.title }</h2>
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <img alt="channel-icon" className="w-12 rounded-full" src={ snippet.thumbnails.high.url } />
                    <div className="flex flex-col">
                        <h1 className="font-bold">{ snippet.channelTitle }</h1>
                        <p>13.9k subscribers</p>
                    </div>
                    <button className="bg-black text-white rounded-full h-8 w-24">Subscribe</button>
                </div>
                <div className="flex gap-3">
                    <div className="flex">
                        <button className="flex items-center bg-gray-200 w-24 rounded-tl-2xl rounded-bl-2xl">
                            <img alt="like-icon" className="w-4 ml-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tk-K7b5v40nP0KnsjdY8u2EyJQRtjgmA7A&s" />
                            <span className="ml-4">{ formatViewsCount(statistics.likeCount) }</span>
                        </button>
                        <button className=" items-center bg-gray-200 w-24 rounded-tr-2xl rounded-br-2xl"><img alt="dislike-icon" className="w-8  ml-8" src="https://static.vecteezy.com/system/resources/previews/003/586/426/original/dislike-icon-symbol-illustration-free-vector.jpg"/></button>
                    </div>
                    <button className="flex items-center bg-gray-200 w-24 rounded-full"><img alt="share-icon" className="w-4 ml-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tk-K7b5v40nP0KnsjdY8u2EyJQRtjgmA7A&s" /> <span className="ml-4">Share</span></button>
                </div>
            </div>
            <div className="flex flex-col p-3 bg-gray-200 rounded-2xl gap-2">
                <div className="flex gap-3 font-bold">
                    <p>{ formatViewsCount(statistics.viewCount) } views</p>
                    <p>{ convertToRelativeTime(snippet.publishedAt)  }</p>
                </div>
                {
                    showMore ? (
                        <div className="flex items-center">
                            <p>{ snippet.description.slice(0,30) }</p>
                            <p 
                                className="font-bold cursor-pointer text-center hover:bg-gray-500 w-24 rounded-xl" 
                                onClick={()=>setShowMore(!showMore)}>
                                ...more
                            </p>
                        </div>
                    ) : 
                    (
                        <div className="flex flex-col">
                            <p>{ snippet.description }</p>
                            <p 
                                className="font-bold cursor-pointer hover:bg-gray-500 p-1 w-24 rounded-xl" 
                                onClick={()=>setShowMore(!showMore)}>
                                Show Less
                            </p>
                        </div>
                    )
                }
            </div>

            <Comments videoId={videoId} commentsCount={ formatViewsCount(statistics.commentCount) }/>
        </div>
    )
}

export default WatchPage;