import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../Utils/constants"
import { useEffect, useState, useCallback } from "react";
import SearchResultsCards from "./SearchResultsCards";

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const fetchSearchQueryData = useCallback(async () => {
        try {
            const searchQuery = searchParams.get("search_query");
            if (!searchQuery) return;

            const searchResponse = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=${YOUTUBE_API_KEY}&type=video`
            );
            const searchJson = await searchResponse.json();

            if (searchJson.items.length === 0) {
                setLoading(false);
                return;
            }

            const videoIds = searchJson.items.map(item => item.id.videoId).join(",");
            const videoResponse = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
            );
            const videoJson = await videoResponse.json();
            setSearchResults(videoJson.items);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    }, [searchParams]);

    useEffect(() => {
        fetchSearchQueryData();
    }, [fetchSearchQueryData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-3">
            {searchResults.length === 0 ? (
                <div>No results found</div>
            ) : (
                searchResults.map(item => (
                    <Link to={ "/watch?v=" + item.id } key={item.id} ><SearchResultsCards info={item} /></Link>
                ))
            )}
        </div>
    );
};

export default SearchPage;