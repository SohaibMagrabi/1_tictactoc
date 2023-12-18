const Square = ({className,value,onClick})=> {
    return(
        <button className={`w-32 h-32 border border-zinc-100 rounded-xl shadow-xl hover:scale-90 bg-zinc-100 ${className}`} 
        onClick={onClick}>
            {
               value ==='X'? (
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="-73.92 -73.92 640.64 640.64" >
                <path  d="M480,230.4H262.4V12.8c0-7.2-8.8-12.8-16-12.8c-7.2,0-16,5.6-16,12.8v217.6H12.8 c-7.2,0-12.8,8.8-12.8,16c0,7.2,5.6,16,12.8,16h217.6V480c0,7.2,8.8,12.8,16,12.8c7.2,0,16-5.6,16-12.8V262.4H480 c7.2,0,12.8-8.8,12.8-16S486.4,230.4,480,230.4z"/>
            </svg>
               )
               :value==='O'? 'O'
               :null

            }
        </button>
    )
}
export default Square
