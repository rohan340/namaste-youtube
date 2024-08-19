import { Link } from "react-router-dom";
import usePopularVideos from "../Hooks/usePopularvideos";
import VideoCards from "./VideoCards";

const VideoContainer = () => {
    // Get Popular Videos
    const popularVideos = usePopularVideos();

    if (popularVideos === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {popularVideos.map((video, index) => (
                <Link key={index} to={"/watch?v=" + video.id}><VideoCards info={video} /></Link>
            ))}
        </>
    );
};

export default VideoContainer;