const ButtonList = ({ info }) => {
    const {id, snippet} = info;
    return (
        <>
            <button id={ id } className="bg-gray-200 font-bold p-3 text-center cursor-pointer rounded">{snippet.title}</button>
        </>
    )
}

export default ButtonList;