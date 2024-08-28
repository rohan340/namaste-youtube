export const BUTTON_LIST = 
    ['All','Music','Javascript','Podcast','Mixes','Gaming','Live','Skills','Badminton','Trailers', 'Olympic','Pool',"Snooker"];

export const YOUTUBE_API_KEY = "AIzaSyAhxfphaIp-0foGdkmZfV3LZmhmXbhhR-s";

export const YOUTUBE_API_URL = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key="+ YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_CATEGORY_LIST = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&maxResults=10&regionCode=US&key=" + YOUTUBE_API_KEY;