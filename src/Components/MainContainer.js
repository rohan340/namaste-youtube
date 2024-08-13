import ButtonList from "./ButtonList";
import { BUTTON_LIST } from "../Utils/contants";

const MainContainer = ()=>{
    
    return(
        <div className="flex p-3">
            <div className="flex gap-4">
                {
                    BUTTON_LIST.map((item, id)=>(
                        <ButtonList key={ id } name={ item }/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default MainContainer;