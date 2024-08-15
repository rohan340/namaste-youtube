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
                <VideoCards key={index} info={video} />
            ))}
        </>
    );
};

export default VideoContainer;