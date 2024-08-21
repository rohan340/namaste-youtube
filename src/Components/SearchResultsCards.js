import { formatViewsCount, convertToRelativeTime } from "../Hooks/useFormatDateView";

const SearchResultsCards = ({ info })=>{
    const { snippet, statistics  } = info;
    const { channelTitle, thumbnails, title, description, publishedAt } = snippet;
    return(
        <div className="flex w-[74rem] ml-3 mt-3 gap-4 p-2 shadow-md cursor-pointer">
            <img className="rounded" src={ thumbnails.medium.url} alt="thumbnail" />
            <div className="flex flex-col w-[71%]">
                <h1 className="font-bold truncate">{ title }</h1>
                <p>{ channelTitle }</p>
                <p>{ formatViewsCount(statistics.viewCount) } views</p>
                <p>{ formatViewsCount(statistics.commentCount) } comments</p>
                <p>{ formatViewsCount(statistics.likeCount) } likes</p>
                <span className="truncate">{ description }</span>
                <p>{ convertToRelativeTime(publishedAt) } </p>
            </div>
        </div>
    )
}

export default SearchResultsCards;