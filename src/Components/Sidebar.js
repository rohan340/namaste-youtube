import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ()=>{
    return(
        <div className="sidebar w-1/6 p-3">
            <div className="flex flex-col gap-2">
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Home</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Shorts</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Subscriptions</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">History</span>
                </div>
            </div>
            
            <div className="flex explore flex-col gap-2 mt-4">
                <h1 className="text-2xl font-bold">Explore</h1>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Trending</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Shopping</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Music</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Movies</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Live</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Gaming</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">News</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Sports</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={ faArrowRight } />
                    <span className="ml-3">Courses</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;