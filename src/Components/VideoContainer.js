import { Link } from "react-router-dom";
import VideoCards from "./VideoCards";
import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addLoader, addVideos } from "../Utils/appSlice";
import VideoCardsShimmerEffect from "./VideoCardsShimmerEffect";
import { RESPONSE_CODE } from "../Utils/constants";

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
}

const VideoContainer = ({ categoryId }) => {
    const dispatch = useDispatch();
    const popularVideos = useSelector((store) => store.app.video.popularVideos);
    const paginationToken = useSelector((store) => store.app.video.nextPageToken);
    const error = useSelector((store) => store.app.video.error);
    const loader = useSelector((store) => store.app.loader);

    const fetchYoutubePopularVideos = async (pageToken = '', categoryId = null) => {
        try {
            const url = categoryId !== null && categoryId !== 'all'
                ? `${YOUTUBE_API_URL}&pageToken=${pageToken}&videoCategoryId=${categoryId}` 
                : `${YOUTUBE_API_URL}&pageToken=${pageToken}`;

            const response = await fetch(url);
           
            if (RESPONSE_CODE.includes(response.status)) {
                dispatch(addLoader(false));
                dispatch(addVideos({
                    videos: [],
                    nextPageToken: null,
                    error: true,
                }));
                return;
            }

            dispatch(addLoader(false));
            
            const json = await response.json(); 
            dispatch(addVideos({
                videos: json.items,
                nextPageToken: json.nextPageToken,
                error: false
            }));
        } catch (error) {
            console.error("Error in fetching Popular videos:", error);
        }
    };

    const handleScroll = ()=>{
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            
            if (paginationToken) {
                dispatch(addLoader(true));
                fetchYoutubePopularVideos(paginationToken, categoryId);
            }
        }
    };

    useEffect(() => {
        if(popularVideos.length === 0) {
            setTimeout(()=>fetchYoutubePopularVideos('', categoryId),500);
        }
    }, [categoryId]);

    useEffect(() => {
        window.addEventListener("scroll", debounce(handleScroll, 500));
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    if (error) {
        return <div className="pl-[535px] pt-[200px] font-bold">No results found.</div>;
    }

    if (popularVideos.length === 0) {
        return <VideoCardsShimmerEffect />
    }

    return (
        <>  
            {popularVideos.map((video, index) => (
                <Link key={index} to={`/watch?v=${video.id}`}>
                    <VideoCards info={video} />
                </Link>
            ))}
            { loader && <VideoCardsShimmerEffect />}
        </>
    );
};

export default VideoContainer;
