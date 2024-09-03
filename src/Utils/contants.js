export const BUTTON_LIST = 
    ['All','Music','Javascript','Podcast','Mixes','Gaming','Live','Skills','Badminton','Trailers', 'Olympic','Pool',"Snooker"];

export const YOUTUBE_API_KEY = "AIzaSyAhxfphaIp-0foGdkmZfV3LZmhmXbhhR-s";

export const YOUTUBE_API_URL = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key="+ YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_CATEGORY_LIST = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&maxResults=10&regionCode=US&key=" + YOUTUBE_API_KEY;

export const sideBarrItems = [
    {
        name:'Subscriptions',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s',
        path:'/'
    },
    {
        name:'Library',
        url:'https://static-00.iconduck.com/assets.00/video-library-icon-256x256-942itvxv.png',
        path:'/'
    },
    {
        name:'History',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMUTDrq0NiGUdf2PL9zn6oJT9j62WwNLHLQ&s',
        path:'/'
    },
    {
        name:'Your Videos',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdR5QwiDf4DjsLoFK7ch2ynLT69ofYqos4cA&s',
        path:'/'
    },
    {
        name:'Watch Later',
        url:'https://cdn1.iconfinder.com/data/icons/youtube-23/29/Subtract-8-512.png',
        path:'/'
    },
    {
        name:'Liked Videos',
        url:'https://p.kindpng.com/picc/s/129-1293111_like-symbol-for-interface-of-black-hand-shape.png',
        path:'/'
    }
]