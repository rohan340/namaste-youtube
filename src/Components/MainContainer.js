import ButtonList from "./ButtonList";
import { BUTTON_LIST } from "../Utils/contants";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
    
    return(
        <div className="flex flex-col p-3 border shadow-lg">
            <div className="flex gap-4">
                {
                    BUTTON_LIST.map((item, id)=>(
                        <ButtonList key={ id } name={ item }/>
                    ))
                }
            </div>
            <div className="flex flex-wrap">
                <VideoContainer />
            </div>
        </div>
    )
}

export default MainContainer;