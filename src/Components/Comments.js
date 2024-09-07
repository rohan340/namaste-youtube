import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/contants";
import CommentsList from "./CommentsList";

const Comments = ({ commentsCount, videoId })=>{

    const [ commenstsList, setCommentsList] = useState([]);
    const [ error, setError] = useState(false);

    const fetchComments = async ()=>{
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${YOUTUBE_API_KEY}`)

            if(response.status === 400 || response.status === 404){
                setError(true);
                return;
            }

            const data = await response.json();
            setCommentsList(data?.items)
        }
        catch(error){
            console.error("Error in fetching Video Comments " + error);
        } 
    }

    useEffect(()=>{
        fetchComments();
    },[]);

    if(error){
        return <div>No Result Found</div>
    }

    if(commenstsList.length === 0){
        return <div>Loading...</div>
    }

    return(
        <div className="flex flex-col gap-4 pb-10">
            <h1 className="font-bold text-2xl">{ commentsCount } Comments</h1>
            {
                commenstsList && commenstsList.map(( item ) => <CommentsList key={ item.id } info={ item }/> )
            }
        </div>
    )
}

export default Comments;