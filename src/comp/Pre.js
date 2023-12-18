const Pre = ({draw,winO,winX})=> {
    return(
        <div className="flex flex-row gap-x-12 font-extrabold text-zinc-700">
            <span className=" text-cyan-500">O= {winO}</span>
            <span className=" text-sky-600">X= {winX}</span>
            <span className=" text-zinc-400">draw=  {draw}</span>

        </div>
    )
}
export default Pre