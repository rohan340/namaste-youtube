const VideoCardsShimmerEffect = ()=>{
    return(
        <>
            {
                Array.from({length:8}).map((el,index)=>(
                    <div key={ index} className="animate-pulse w-[310px] h-[267px] bg-white flex flex-col gap-3">
                        <div className="bg-gray-200 rounded w-[310px] h-[200px]"></div>
                        <div className="flex gap-[10px]">
                            <div className="bg-gray-200 w-[40px] h-[40px] rounded-full"></div>
                            <div className="flex flex-col gap-[13px]">
                                <div className="bg-gray-200 w-[251px] h-[10px] "></div>
                                <div className="bg-gray-200 w-[251px] h-[10px] "></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default VideoCardsShimmerEffect;