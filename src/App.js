import Header from "./comp/Header";
import Pre from "./comp/Pre";
import Square from "./comp/Square";
import Post from "./comp/Post";
import Footer from "./comp/Footer";
import { useEffect, useRef, useState } from "react";
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const App = () => {
  const [squares, setSq] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(true);

  const [winSq, setWinSq] = useState(null);
  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);
  const [draw, setDraw] = useState(0);

  const hClick = i => {
    if (winSq || squares[i]) {
      return
    }

    setSq(prevSq => {
      const newSq = [...prevSq];
      newSq[i] = isXnext ? 'X' : 'O'
      return newSq

    })


    setIsXNext(prev => !prev)

  }
  

  useEffect(() => {
    winCombo.forEach((e) => {
      if (e.every(e => squares[e] === 'X')) {
        setWinSq('X')
        setWinX(e => e + 1)
      } else if (e.every(e => squares[e] === 'O')) {
        setWinSq('O')
        setWinO(e => e + 1)
      }           
    })
    if (!winSq && squares.every(e => e !== null)) {
      setWinSq('draw')
      setDraw(e => e + 1)   
    }    
  },[squares]) 
 

  const renderSq = (i) => {
    const isWinSq = winSq && winSq.includes(i);
    //console.log(winSq.includes(i))
    return (
      <Square
        value={squares[i]}
        onClick={() => hClick(i)}
        className={`${isWinSq? 'bg-zinc-200':''}`}
        
      />

    )
  }


  const hReset = () => {
    setSq(Array(9).fill(null))
    setIsXNext(true)
    setWinSq(null)
  }
  return (

    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 h-screen py-8 px-3 mx-auto relative" >

      <Header />


      <div className="flex flex-col justify-center items-center gap-y-12 mt-12">
        <Pre winX={winX} winO={winO} draw={draw} />
       
        <div className="grid grid-cols-3 relative overflow-hidden shadow-2xl rounded-xl">
          {


            Array.from({ length: 9 }, (_, i) => renderSq(i))

          }

        </div >

        <Post
         onClick={hReset}
         winner={
          winSq ? `${winSq}`
          : squares.includes(null) ? isXnext ? 'x turn' : 'o turn'
          : 'draw'
         }
         
        />
        <Footer />
      </div>



    </div>
  );
}

export default App;
