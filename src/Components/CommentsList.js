import { convertToRelativeTime } from "../Hooks/useFormatDateView";

const CommentsList = ({ info })=>{

    const { snippet } = info;
    const comment = snippet?.topLevelComment?.snippet;
    const { authorProfileImageUrl, authorDisplayName, publishedAt, textOriginal, likeCount } = comment;

    return(

            <div className="flex gap-4">
                <img className="w-10 h-10 rounded-full" alt="profile-pic" src={ authorProfileImageUrl } />
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-md font-semibold text-gray-700">{ authorDisplayName }</h3>
                        <p className="text-xs text-gray-500">{ convertToRelativeTime(publishedAt) }</p>
                    </div>
                    <p>{ textOriginal }</p>
                    <div className="flex items-center gap-2">
                        <img className="w-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tk-K7b5v40nP0KnsjdY8u2EyJQRtjgmA7A&s"/>
                        <p>{ likeCount }</p>
                        <img className="w-8" src="https://static.vecteezy.com/system/resources/previews/003/586/426/original/dislike-icon-symbol-illustration-free-vector.jpg"/>
                    </div>
                </div>
            </div>
    )
}

export default CommentsList;