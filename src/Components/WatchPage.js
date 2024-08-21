import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../Utils/contants";

const WatchPage = () => {
    const [ searchParams ] = useSearchParams();    
    
    return (
        <div className="p-2">
            <iframe
                className="rounded"
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage;