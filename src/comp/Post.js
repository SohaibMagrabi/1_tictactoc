
const Post = ({ onClick ,winner }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-3">

              <div className="flex flex-row justify-center items-center p-3">
                 {
                      <div className={winner}>{winner}</div>
                  }
              </div>
                <svg width={16}  viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={onClick}
                 className="fill-zinc-400   hover:scale-150 cursor-pointer hover:fill-zinc-900" >
                    <path d="M64,32 C64,49.664 49.664,64 32,64 C14.336,64 -4.26325641e-14,49.664 -4.26325641e-14,32 C-4.26325641e-14,14.336 14.336,-4.26325641e-14 32,-4.26325641e-14 C49.664,-4.26325641e-14 64,14.336 64,32 Z M224,32 C224,49.664 209.664,64 192,64 C174.336,64 160,49.664 160,32 C160,14.336 174.336,-4.26325641e-14 192,-4.26325641e-14 C209.664,-4.26325641e-14 224,14.336 224,32 Z M64,352 C64,369.664 49.664,384 32,384 C14.336,384 -4.26325641e-14,369.664 -4.26325641e-14,352 C-4.26325641e-14,334.336 14.336,320 32,320 C49.664,320 64,334.336 64,352 Z M224,352 C224,369.664 209.664,384 192,384 C174.336,384 160,369.664 160,352 C160,334.336 174.336,320 192,320 C209.664,320 224,334.336 224,352 Z M64,192 C64,209.664 49.664,224 32,224 C14.336,224 -4.26325641e-14,209.664 -4.26325641e-14,192 C-4.26325641e-14,174.336 14.336,160 32,160 C49.664,160 64,174.336 64,192 Z M224,192 C224,209.664 209.664,224 192,224 C174.336,224 160,209.664 160,192 C160,174.336 174.336,160 192,160 C209.664,160 224,174.336 224,192 Z M384,32 C384,49.664 369.664,64 352,64 C334.336,64 320,49.664 320,32 C320,14.336 334.336,-4.26325641e-14 352,-4.26325641e-14 C369.664,-4.26325641e-14 384,14.336 384,32 Z M384,352 C384,369.664 369.664,384 352,384 C334.336,384 320,369.664 320,352 C320,334.336 334.336,320 352,320 C369.664,320 384,334.336 384,352 Z M384,192 C384,209.664 369.664,224 352,224 C334.336,224 320,209.664 320,192 C320,174.336 334.336,160 352,160 C369.664,160 384,174.336 384,192 Z" id="Combined-Shape">

                    </path>


                </svg>
          



        </div>
    )
}
export default Post
